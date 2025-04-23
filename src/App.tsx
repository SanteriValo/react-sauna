import "./styles/app.scss";
import Header from "./components/Header.tsx";
import Categories from "./components/Categories.tsx";
import Sort from "./components/Sort.tsx";
import ItemBlock from "./components/ItemBlock.tsx";
import productList from "./assets/data/productList.json";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        {Header()}
        <div className="content">
          <div className="container">
            <div className="content__top">
              {Categories()}
              {Sort()}
            </div>
            <h2 className="content__title">All items</h2>
            <div className="content__items">
              {productList.map((item) => (
                <ItemBlock key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
