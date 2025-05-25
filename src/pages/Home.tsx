import Categories from "../components/Categories.tsx";
import Sort from "../components/Sort.tsx";
import Skeleton from "../components/ItemBlock/Skeleton.tsx";
import ItemBlock from "../components/ItemBlock";
import { useEffect, useState } from "react";
import SearchBlock from "../components/SearchBlock";

export const Home = ({ searchValue, setSearchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "price up",
    sortProperty: "price",
  });

  console.log({ categoryId }, { sortType });

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    fetch(
      `https://680bb9062ea307e081d21a74.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}
    `,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const filteringItems = items
    .filter((item) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <ItemBlock key={obj.name} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          setCategoryId={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} setSortType={setSortType} />
      </div>
      <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content__items">
        {isLoading ? skeletons : filteringItems}
      </div>
    </div>
  );
};

export default Home;
