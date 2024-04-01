import { IoCallSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { ImPriceTags } from "react-icons/im";
import myhirelogo from "../../assets/Images/myhirelogo.png";
import "./ChooseUs.css";

export default function ChooseUs() {
  return (
    <div className="choose">
      <div className="choose-logo">
        <img src={myhirelogo} width="100%" height="100%" alt="logo" />
      </div>

      <div className="choose-box">
        <div>
          {" "}
          <h1>why choose us</h1>
        </div>
        <div className="choose-list flex gap-4">
          <div className="choose-img">
            <ImPriceTags className="choose-icon" />
          </div>
          <div>
            <h3> Best Price Garaunteed</h3>
            <p>
              Find a lower price? we`ll refund you 100% percent of the
              difference
            </p>
          </div>
        </div>{" "}
        <div className="choose-list flex gap-4">
          <div className="choose-img">
            <HiLocationMarker className="choose-icon" />
          </div>
          <div className="">
            <h3>24hrs car delivery</h3>
            <p>Book your car anytime and we will deliver it directly to you</p>
          </div>
        </div>{" "}
        <div className="choose-list flex gap-4">
          <div className="choose-img">
            <IoCallSharp className="choose-icon" />
          </div>
          <div>
            <h3>24/7 technical Support</h3>
            <p>
              Have a question? contact rental car support,anytime you have a
              problem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
