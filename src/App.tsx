import "./styles/app.scss";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router";
import { useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
