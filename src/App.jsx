import "./App.css";
import Wrapper from "./components/layout/wrapper/Wrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/cms/home/Home";
import Products from "./components/cms/products/Products";
import Cart from "./components/cms/cart/Cart";

function App() {
  const public_router = [
    {
      page: "Home",
      path: "/",
      component: <Home />,
    },
    {
      page: "Products",
      path: "/products/:id",
      component: <Products />,
    },
    {
      page: "Cart",
      path: "/cart",
      component: <Cart />,
    },
  ];

  return (
    <>
      <Wrapper>
        <Router>
          <Routes>
            {public_router.map((item) => (
              <Route
                key={item.page}
                path={item.path}
                element={item.component}
              />
            ))}
          </Routes>
        </Router>
      </Wrapper>
    </>
  );
}

export default App;
