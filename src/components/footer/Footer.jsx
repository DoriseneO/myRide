import { LiaFacebookF, LiaTwitter } from "react-icons/lia";
import { TiSocialInstagram } from "react-icons/ti";
import logo from "../../assets/Images/logo.png";

function Footer() {
  return (
    <div className="md:w-[100%] flex items-center justify-center md:h-[100%] md:flex bg-[#5D3578] md:justify-around md:items-center  text-white p-block-[80px]">
      <div className="w-[90%]">
        <div className="mt-4 md:w-[100%] w-[100%] md:h-[80%]  md:flex md:justify-around md:items-center md:flex-row flex items-center  flex-col-reverse">
          <div className=" w-[100%]   md:w-[70%] md:h-[100%] md:flex md:justify-center md:items-center ">
            <section className="md:w-[90%] w-[100%] h-[300px] flex flex-col items-center md:items-start text-[18px] ">
              <img src={logo} className="w-[40%]  h-[40%] " alt="logo" />

              <p className="text-center md:text-left">
                our vision is to provide convenience <br /> and help increase
                your sales through <br /> Our Car Rental
              </p>
              <span className="flex justify-between w-[100px] mt-4 text-black">
                <div className="icon bg-white w-[25px] h-[25px] rounded-[50%] flex items-center justify-center">
                  {" "}
                  <LiaFacebookF />
                </div>
                <div className="icon bg-white w-[25px] h-[25px] rounded-[50%] flex items-center justify-center">
                  {" "}
                  <LiaTwitter />
                </div>
                <div className="icon bg-white w-[25px] h-[25px] rounded-[50%] flex items-center justify-center">
                  <TiSocialInstagram />
                </div>
              </span>
            </section>
          </div>

          {/* large screen footer section */}
          <section className="hidden md:block w-[100%] h-[100%] md:flex md:justify-around md:items-center m-4">
            <span>
              <h1 className="font-semibold">ABOUT US</h1>
              <ul className="footer-items ">
                <li className="mt-4">How it works</li>
                <li className="mt-4">Featured post</li>
                <li className="mt-4">Partnership</li>
                <li className="mt-4">Business relation</li>
              </ul>
            </span>

            <span>
              <h1 className="font-semibold">COMMUNITY</h1>
              <ul className="footer-items">
                <li className="mt-4">Events</li>
                <li className="mt-4">Our Blogs</li>
                <li className="mt-4">Our podcast</li>
                <li className="mt-4">Invite a Friend to hire</li>
              </ul>
            </span>

            <span>
              <h1 className="font-semibold">SOCIALS</h1>
              <ul className="footer-items">
                <li className="mt-4">Discord</li>
                <li className="mt-4">instagram</li>
                <li className="mt-4">twitter</li>
                <li className="mt-4">facebook</li>
              </ul>
            </span>
          </section>

          {/* mobile screen footer section */}
          <section className="block md:hidden flex w-[100%] justify-between">
            <span>
              <h1 className="font-semibold">ABOUT-US</h1>
              <ul className="footer-items">
                <li className="mt-4">Blogs</li>
                <li className="mt-4">Activity</li>
              </ul>
            </span>

            <span>
              <h1 className="font-semibold">SUPPORT</h1>
              <ul>
                <li className="mt-4">Help & Support</li>
                <li className="mt-4">Contact</li>
              </ul>
            </span>
          </section>
        </div>

        <hr className="h-1 dark:bg-black-200 hidden md:block" />

        <div className=" flex items-center justify-center w-full p-2">
          <section className="flex md:justify-between md:w-[100%]  items-center">
            <p> @2023MyHire.All rights reserved</p>

            <span className="md:flex md:gap-8 hidden md:block">
              <p>Terms & Conditions</p>
              <p>Privacy & Policy</p>
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Footer;
