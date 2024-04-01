import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/Images/logo.png";
import "./Header.css";
import Button from "../button/Button";
function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="header-con bg-[#5D3578]">
      {" "}
      <div className="header ">
        <img src={logo} className="md:w-[15%] w-[30%]" alt="logo" />{" "}
        <div className="nav-items">
          <div className="navbar" onClick={() => setShow(!show)}>
            {show ? (
              <button className="p-1 border border-white-300 focus:outline-none text-[28px] text-white">
                <GrClose />{" "}
              </button>
            ) : (
              <button className="p-1 border border-white-300 focus:outline-none font-8 text-[28px] text-white">
                <GiHamburgerMenu />{" "}
              </button>
            )}
          </div>{" "}
          <div className={`nav-links ${show ? "nav" : ""}`}>
            <ul className="nav" onClick={() => setShow(!show)}>
              <li>
                <Link to="/" onClick={() => setShow(!show)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/RentCar" onClick={() => setShow(!show)}>
                  Rent Car
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setShow(!show)}>
                  Contact us
                </Link>
              </li>{" "}
              <li>
                <Link to="/Register" onClick={() => setShow(!show)}>
                  Register
                </Link>
              </li>
              <li>
                <div className="bg-white text-black border rounded-[4px] w-[70px] ">
                  <Link to="/Login" className="link-btn">
                    <Button
                      content="login"
                      color="black"
                      backgroundColor="white"
                      textAlign="center"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Header;
