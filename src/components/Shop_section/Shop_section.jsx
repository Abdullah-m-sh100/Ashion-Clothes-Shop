import "./Shop_section.css";
import ShopProducts from "../Shop_products/Shop_products";
import OptionShopPage from "../Option-Shop-page/Option-Shop-page";
import { useState } from "react";
import { data } from "../../mock/data";
import ShopPagination from "../ShopPagination";

const ShopSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [category, setCategory] = useState("all");

  const filteredData =
    category === "all"
      ? data
      : data.filter((item) => {
          const itemCat = item.categories;

          if (Array.isArray(itemCat)) {
            return itemCat.some(
              (c) => c.toLowerCase() === category.toLowerCase(),
            );
          }

          return itemCat?.toLowerCase() === category.toLowerCase();
        });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  let handelSetCategory = (cate) => {
    const validCategory = cate ? cate : "all";
    setCategory(validCategory);
    setCurrentPage(1);
  };
  return (
    <div className="ShopSection">
      <div className="container">
        <div className="row">
          {/* Pass the function here */}
          <OptionShopPage handelSetCategory={handelSetCategory} />

          <div className="column">
            {/* Pass the array here */}
            <ShopProducts currentProducts={currentProducts} />

            <ShopPagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
