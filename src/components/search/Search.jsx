import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

function Search() {
  const { search, handleSearch } = useContext(ProductContext);
  return (
    <div
      id="search"
      className=" w-[100%] md:h-[100px] h-[70px]  flex items-center justify-center"
    >
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
        autoComplete="search"
        className="w-[70%] h-[50%]  border-2 
                        border-gray-200 bg-inherit px-5 
                        rounded-lg text-sm focus:outline-none"
      />
    </div>
  );
}
export default Search;
