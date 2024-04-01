import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-pink-500 ">
      <section className="bg-[#5D3578]   w-full h-[100vh] flex items-center">
        <div className="flex flex-col h-[100%] items-center justify-center px-6 mx-auto  lg:py-0">
          <div className=" md:w-[100%] flex items-center justify-center    xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <span>
                <h1 className="text-xl font-bold  text-white md:text-2xl ">
                  Register
                </h1>
                <p className="text-base text-gray-300 md:text-lg">
                  Register my Account
                </p>
              </span>
              <form
                className="space-y-4 md:space-y-6 w-full md:w-[600px]"
                onSubmit=""
              >
                {/* this is the  name section */}
                <span className="flex w-[100%]  items-center justify-between">
                  {/* this is the first name section */}
                  <div>
                    <input
                      type="Name"
                      name="Name"
                      value=""
                      className="bg-[#F2DEFF] md:w-[280px] md:h-[60px] h-[50px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      autoComplete="name"
                      placeholder="First Name"
                      required=""
                    />
                  </div>

                  {/* this is the last name section */}
                  <div>
                    <input
                      type="last-Name"
                      name="last-Name"
                      value=""
                      className="bg-[#F2DEFF] md:w-[280px] md:h-[60px] h-[50px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      autoComplete="last-name"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                </span>

                {/* this is the email section */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value=""
                    className="bg-[#F2DEFF] md:h-[60px] h-[50px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="email"
                    placeholder="@ EMAIL"
                    required=""
                  />
                </div>

                {/* this is the telephone section */}
                <div>
                  <input
                    type="phone"
                    name="phone"
                    value=""
                    className="bg-[#F2DEFF] md:h-[60px] h-[50px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="phone"
                    placeholder="telephone"
                    required=""
                  />
                </div>

                {/* this is the password section */}
                <div>
                  <input
                    type="password"
                    name="password"
                    value=""
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="bg-[#F2DEFF] md:h-[60px] h-[50px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                {/* this is comfirm password section */}
                <div>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    value=""
                    placeholder="confirm password"
                    className="bg-[#F2DEFF] md:h-[60px] h-[50px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="new-password"
                    required=""
                  />
                </div>

                {/* this is the login button */}
                <button
                  type="submit"
                  title="register-me"
                  className="w-full h-[50px] text-white bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  REGISTER ME
                </button>

                {/* this is the forgot password section */}
                <div className="flex items-center justify-end w-full ">
                  <div className="">
                    <p className="font-light text-gray-200 ">
                      Already have an account yet?{" "}
                      <Link to="/Login" className="font-medium text-white">
                        Sign In
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
  );
}
export default Register;
