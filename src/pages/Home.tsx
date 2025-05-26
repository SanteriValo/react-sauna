import Categories from "../components/Categories.tsx";
import Sort from "../components/Sort.tsx";
import Skeleton from "../components/ItemBlock/Skeleton.tsx";
import ItemBlock from "../components/ItemBlock";
import { useEffect, useState } from "react";
import SearchBlock from "../components/SearchBlock";
import Pagination from "../components/Pagination";

export const Home = ({ searchValue, setSearchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "price up",
    sortProperty: "price",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");

    const params = [];
    if (categoryId > 0) params.push(`category=${categoryId}`);
    params.push(`sortBy=${sortBy}`);
    params.push(`order=${order}`);
    params.push(`page=${currentPage}`);
    params.push(`limit=8`);
    if (searchValue) params.push(`search=${searchValue}`);

    const queryString = params.join("&");

    fetch(`https://680bb9062ea307e081d21a74.mockapi.io/items?${queryString}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);

        if (data.length < ITEMS_PER_PAGE) {
          setPageCount(currentPage);
        } else {
          setPageCount(currentPage + 1);
        }
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const filteringItems = Array.isArray(items)
    ? items.map((obj) => <ItemBlock key={obj.name} {...obj} />)
    : [];
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onChangeCategory = (index) => {
    setCategoryId(index);
    setCurrentPage(1);
  };

  const onChangeSort = (sortObj) => {
    setSortType(sortObj);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} setCategoryId={onChangeCategory} />
        <Sort value={sortType} setSortType={onChangeSort} />
      </div>
      <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content__items">
        {isLoading ? skeletons : filteringItems}
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={setCurrentPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Home;
