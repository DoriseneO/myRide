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
        <div className="displayed-img">
          <img src={show.img} width="100%" height="100%" alt="car" />
          <div className="product-display_section">
            <h1>{show.name}</h1>
            <h1>£2,500,000</h1>
          </div>
        </div>
        <ProductDetail show={show} />
      </div>
    </>
  );
}
