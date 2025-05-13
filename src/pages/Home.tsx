import Categories from "../components/Categories.tsx";
import Sort from "../components/Sort.tsx";
import Skeleton from "../components/ItemBlock/Skeleton.tsx";
import ItemBlock from "../components/ItemBlock";
import { useEffect, useState } from "react";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://680bb9062ea307e081d21a74.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        {Categories()}
        {Sort()}
      </div>
      <h2 className="content__title">All items</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ItemBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
