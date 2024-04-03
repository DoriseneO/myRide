import myhirelogo from "../../assets/Images/myhirelogo.png";
import "./ChooseUs.css";
import ChooseContent from "./ChooseContent";

export default function ChooseUs() {
  return (
    <div className="choose-con">
      {" "}
      <div className="choose">
        <div className="choose-logo">
          <img src={myhirelogo} width="100%" height="100%" alt="logo" />
        </div>

        <div className="choose-box">
          <div>
            <h1>why choose us</h1>
          </div>
          <ChooseContent />
        </div>
      </div>
    </div>
  );
}
