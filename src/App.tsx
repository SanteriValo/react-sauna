import "./styles/app.scss";
import Header from "./components/Header.tsx";
import Categories from "./components/Categories.tsx";
import Sort from "./components/Sort.tsx";
import ItemBlock from "./components/ItemBlock.tsx";

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
              <ItemBlock name={"Harvia333"} price={240} />
              <ItemBlock name={"Harvia999"} price={490} />
              <ItemBlock name={"Harvia111"} price={179} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
