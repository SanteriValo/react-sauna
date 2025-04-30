import "./styles/app.scss";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
