import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import All_Product from "../All_Product/All_Product";

export default function ProductDisplay() {
  const { ProductDisplay } = useParams();
  const show = All_Product.find((car) => car.name === ProductDisplay);
  console.log(show);
  return (
    <>
      <div className="productDisplay">
        <h1>{show.name}</h1>
        <img src={show.img} alt="car" />
        <ProductDetail show={show} />
      </div>
    </>
  );
}
