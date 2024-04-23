import "./ProductDetails.css";
import Button from "../button/Button";
export default function ProductDetail(show) {
  return (
    <div className="productDetail">
      <div className="car_info">
        <h1>{show.caption}</h1>
        <span className="flex justify-between">
          <p>postedDate: 10:30:2024</p>
          <p>lagos,Nigeria</p>
        </span>
      </div>
      <br />
      <div className="car_info_2">
        <span>
          <p>model</p>
          <p>bmw</p>
        </span>
        <span>
          <p>body</p>
          <p>sedan</p>
        </span>
        <span>
          <p>YOF</p>
          <p>2013</p>
        </span>
        <span>
          <p>color</p>
          <p>black</p>
        </span>
        <span>
          <p>seats</p>
          <p>4</p>
        </span>
      </div>
      <br />
      <div className="car_contact">
        <Button
          content="contact"
          color="white"
          backgroundColor="#5D3578"
          height="100%"
          width="100%"
        />{" "}
        <Button
          content="make an offer"
          color="white"
          backgroundColor="#5D3578"
          height="100%"
          width="100%"
        />
      </div>
      <br />
      <div>
        <h1>Safety tips</h1>
        <ul className="list-style">
          <li>Avoid sending any prepayments</li>
          <li>Meet with the seller at a safe public place</li>
          <li>
            Inspect what you are going to buy to make sure it is what you need
          </li>
          <li>Check all the docs and only pay if you are satisfied</li>
        </ul>
      </div>
    </div>
  );
}
