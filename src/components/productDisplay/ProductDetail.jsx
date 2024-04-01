import "./ProductDetails.css";
export default function ProductDetail(show) {
  return (
    <div className="gap-4 productDetail">
      <div className="car_info">
        <h1>{show.caption}</h1>
        <span className="flex justify-between">
          <p>postedDate: 10:30:2024</p>
          <p>{show.location}</p>
        </span>
      </div>
      <br />

      <div className="car_info_2">
        <p>model</p>
        <p>body</p>
        <p>engine size</p>
        <p>color</p>
        <p>seats</p>
      </div>
      <br />
      <div className="car_contact">
        <a href={show.phoneNumber}>contact</a>
      </div>
      <br />
      <div>
        <h1>Safety tips</h1>{" "}
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
