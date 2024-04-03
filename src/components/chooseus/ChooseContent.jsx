import { IoCallSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { ImPriceTags } from "react-icons/im";
import "../chooseus/ChooseUs.css";
const choose = [
  {
    icon: IoCallSharp,
    h3: "Best Price Guaranteed",
    p: "Find a lower price? We'll refund you 100% of the difference.",
  },
  {
    icon: HiLocationMarker,
    h3: "4hrs car delivery",
    p: "Book your car anytime and we will deliver it directly to you.",
  },
  {
    icon: ImPriceTags,
    h3: "24/7 technical Support",
    p: "contact our car rental support, anytime you have a problem.",
  },
];

const ChooseContent = () => {
  return (
    <div className="chooseContent">
      {choose.map((chooseItem, index) => (
        <div className="choose-list" key={index}>
          <div className="choose-img">
            <chooseItem.icon className="choose-icon" />
          </div>
          <div className="text-left">
            <h3>{chooseItem.h3}</h3>
            <p>{chooseItem.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChooseContent;
