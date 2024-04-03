import "./Review.css";
import doge from "../../assets/Images/myhirelogo.png";
import PropTypes from "prop-types";
export default function UserReview({ name, position, rating }) {
  return (
    <div className="user_comment2">
      {" "}
      <div className="w-[100%] h-[90%]  flex justify-between">
        <div className="flex gap-2">
          <div className="h-[100%] w-[20%]  flex justify-center items-center">
            <img
              src={doge}
              alt="dpg"
              width="100%"
              height="100%"
              className="rounded-full"
            />
          </div>
          <div>
            <h3>{name}</h3>
            <h6 className="text-[12px]">{position}</h6>
          </div>
        </div>
        <div>{rating}</div>
      </div>
      <div className="w-[100%]  h-[90%] text-left p-2">
        <p>
          “Wow... I am very happy to use this VPN, it turned out to be more than
          my expectations and so far there have been no problems. LaslesVPN
          always the best”.
        </p>
      </div>
    </div>
  );
}
UserReview.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
