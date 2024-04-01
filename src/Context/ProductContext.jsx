import { useState } from "react";
import { createContext } from "react";
import All_Product from "../components/All_Product/All_Product";
export const ProductContext = createContext();
import PropTypes from "prop-types";
export default function ProductContextProvider(props) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchItem = All_Product.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const value = { handleSearch, handleSearchItem };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}
ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a required node
};
