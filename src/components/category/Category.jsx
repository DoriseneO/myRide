import { Link, Outlet } from "react-router-dom";
import "./Category.css";

export default function Category() {
  return (
    <div className="category">
      <div className="car-contain flex ">
        <div className="hr-line ">
          {" "}
          <div className="hr h-[400px] w-1  bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700"></div>
        </div>
        <div className="car-category ">
          <div>
            <h1>Category</h1>
            <ul>
              <li>
                {" "}
                <Link to="SportCars">All-Types</Link>
              </li>
              <li>
                <Link to="Suv">Suv</Link>
              </li>
              <li>sedan</li>
              <li> truck</li>
              <li>luxury</li>
              <li>electric</li>
            </ul>
          </div>
          <div>
            <h1> popular</h1>
            <ul>
              <li>llord</li>
              <li>electric</li>
              <li>truck</li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
