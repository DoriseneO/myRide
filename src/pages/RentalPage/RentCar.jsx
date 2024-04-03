import Category from "../../components/category/Category";
import Search from "../../components/search/Search";
import "./RentCar.css";
const RentCar = () => {
  return (
    <div className="rentcar-con">
      <Search />
      <Category />
    </div>
  );
};
export default RentCar;
