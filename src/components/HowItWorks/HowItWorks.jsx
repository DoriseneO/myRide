import { IoLocationSharp } from "react-icons/io5";
import { BsFillCarFrontFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import "./HowItWorks.css";
export default function HowItWorks() {
  return (
    <div className=" h-[100%] flex justify-center items-center  text-black">
      <div className="flex-column h-[80%] ">
        <div className="section1">
          <h1> How it Works</h1>
          <p>
            Our high-performing 3-minutes model delivers your next perfect
            Experience in 3 steps
          </p>
        </div>
        <div className="howitworks">
          <div className="maps">
            <div className="map-icon">
              <IoLocationSharp className="icon" />
            </div>

            <h1>Tell us your location</h1>
            <p>
              Tell us where you are to help us narrow down your Car Hire choices
            </p>
          </div>

          <div className="maps">
            <div className="map-icon">
              <AiFillCalendar className="icon" />
            </div>

            <h1>Schedule Pick-up Date</h1>
            <p>
              Bothered about Pick-Up dates? we’ve got you covered on what ever
              date you choose
            </p>
          </div>

          <div className="maps ">
            <div className="map-icon">
              <BsFillCarFrontFill className="icon" />
            </div>

            <h1>Choose your date</h1>
            <p>Select from our wide array of Cars, one that fit your needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
