import car from "../../assets/Images/car.png";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
export default function HeroSection() {
  return (
    <div className="flex  herosection">
      <div className="hero-caption">
        <p>plan your trip now</p>
        <h1>Save big with our Car Rental</h1>
        <br />
        <p>
          In 3 min, your ride could be on its way. Our Car online booking is
          designed to meet your specific need in no time.
        </p>
        <br />
        <div className="flex gap-5">
          <Button
            content="Learn More"
            color="white"
            width="100%"
            height="50px"
            backgroundColor="#5D3578"
          />
          <Link to="/RentCar" className="hero-button">
            <Button
              content="Rent Now"
              height="50px"
              color="white"
              width="100%"
              backgroundColor="#5D3578"
            />
          </Link>
        </div>
      </div>
      <div>
        <img src={car} width="100%" height="100%" alt="car" />
      </div>
    </div>
  );
}
