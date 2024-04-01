import "./Car.css";
import All_Product from "../All_Product/All_Product";
import Product from "../Product/Product";
import Button from "../button/Button";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { Outlet } from "react-router-dom";

export default function Cars() {
  const { handleSearchItem } = useContext(ProductContext);

  const searcheditems =
    handleSearchItem.length > 0 ? handleSearchItem : All_Product;
  console.log(searcheditems);

  return (
    <div className="car">
      <div className="car-con">
        {searcheditems.map((prod, id) => {
          return <Product prod={prod} key={id} />;
        })}{" "}
      </div>
      <br />
      <div className="w-[40%] p-10">
        {" "}
        <Button
          content="view more"
          width="100%"
          height="100"
          color="white"
        />{" "}
      </div>
      <Outlet />
    </div>
  );
}
