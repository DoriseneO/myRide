import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      {" "}
      <div className=" w-full h-[100vh] ">
        <section className="w-full h-[100%] flex items-center justify-center">
          <div className="flex flex-col h-[100%] items-center justify-center px-6 mx-auto  lg:py-0">
            {/* sm:max-w-md   rounded-lg shadow dark:border*/}
            <div className=" md:w-[100%] flex items-center justify-center sm:max-w-md  md:mt-0  xl:p-0 ">
              <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
                <span>
                  <h1 className="text-xl font-bold  text-black md:text-2xl ">
                    LOGIN
                  </h1>
                  <p className="text-base text-gray-300 md:text-lg">
                    Login My Details
                  </p>
                </span>
                <form className="space-y-4 md:space-y-6  md:w-[600px]">
                  {/* this is the email section */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-[#F2DEFF] h-[60px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 "
                      autoComplete="email"
                      placeholder="useremail@gmail.com"
                      required=""
                    />
                  </div>

                  {/* this is the password section */}
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      autoComplete="password"
                      className="bg-[#F2DEFF] h-[60px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5  "
                      required=""
                    />
                  </div>

                  {/* this is the login button */}
                  <button
                    type="submit"
                    title="submit-button"
                    className="w-full h-[50px] text-white bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    // onClick={handleAccount}
                  >
                    LOGIN
                  </button>

                  {/* this is the forgot password section */}
                  <div className="flex items-center justify-between">
                    <button
                      title="forgot-password-button"
                      className=" font-medium text-white dark:text-primary-500"
                    >
                      Forgot password?
                    </button>
                    <div className="flex items-start">
                      <p className="font-light text-gray-200 ">
                        Don’t have an account yet?{" "}
                        <Link to="/Register" className="font-medium text-white">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
