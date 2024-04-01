import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
export default function Rating() {
  const [isRated, setIsRated] = useState();
  const handleRating = () => {
    setIsRated(!isRated);
  };
  return (
    <div onClick={handleRating}>
      {isRated ? <IoMdStar /> : <IoIosStarOutline />}
    </div>
  );
}
