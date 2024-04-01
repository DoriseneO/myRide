import "./Product.css";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Product({ prod }) {
  return (
    <div className="product-container">
      <div>
        <img src={prod.img} width="100%" height="100%" alt="logo" />
      </div>
      <div className="w-[100%] product_detail">
        <div className="car_profile ">
          {" "}
          <h1>{prod.name}</h1>
          <span className="car_detail_rating">
            {" "}
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </span>
        </div>
        <p>{prod.info}</p>
        <div className="car_detail">
          <h1>£{prod.price}/day</h1>
          <div className="view_more_btn">
            {" "}
            <Link to={`/ProductDisplay/${prod.name}`}>view </Link>
          </div>
          {/* <Button content="View Deal" color="white" /> */}
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  prod: PropTypes.object.isRequired, // Example validation, adjust as needed
};
