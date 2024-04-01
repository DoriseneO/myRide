import UserReview from "./UserReview";
import "./Review.css";
export default function Review() {
  return (
    <div className="review-con">
      {/* <div className="review-box"> */}
      <div className="text-black w-[90%] text-center flex-col justify-center ">
        <h1 className="text-2xl ">Trusted by Thousands of Happy Customer</h1>
        <p className="md:block hidden">yours could be next</p>
        <p className="md:hidden block ">
          A high-performing car rental system for any rent-a-car
        </p>
      </div>
      <br />
      <div className="userreview">
        <UserReview name="Peter" position="backend" rating="4.5" />
        <UserReview name="Aaron" position="manager" rating="4.5" />{" "}
        <UserReview name="Aaron" position="manager" rating="4.5" />
      </div>
    </div>
    // </div>
  );
}
