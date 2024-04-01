import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Layout from "./components/layout/Layout";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import RentCar from "./pages/RentalPage/RentCar";
import ProductContextProvider from "./Context/ProductContext";
import ProductDisplay from "./components/productDisplay/ProductDisplay";
import Suv from "./components/category/Suv";
import SportCars from "./components/category/SportCars";
import Home from "../src/pages/homepage/Home";
function App() {
  return (
    <ProductContextProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/RentCar" element={<RentCar />}>
              {" "}
              <Route index element={<SportCars />}></Route>
              <Route path="SportCars" element={<SportCars />}></Route>
              <Route path="suv" element={<Suv />}></Route>
            </Route>
            <Route path="/ProductDisplay" element={<ProductDisplay />}>
              <Route
                path="/ProductDisplay/:ProductDisplay"
                element={<ProductDisplay />}
              ></Route>
            </Route>
            <Route path="/Login" element={<Login />}></Route>{" "}
            <Route path="/Register" element={<Register />}></Route>
          </Route>
        </Routes>
      </>
    </ProductContextProvider>
  );
}

export default App;
