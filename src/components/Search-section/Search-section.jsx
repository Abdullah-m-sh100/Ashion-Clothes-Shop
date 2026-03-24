import { useState } from "react";
import "./Search-section.css";
import CardSearchSection from "../Card_SearchSection/Card_SearchSection";
import { data } from "../../mock/data";

const SearchSection = () => {
  let [searchInput, setSearchInput] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div className="SearchSection">
      <div className="container">
        <div className="input-pox">
          <input
            type="text"
            placeholder="Looking for a product"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="All-card">
          {filteredData.length > 0 ? (
            <div className="list-disc">
              {filteredData.map((item, index) => (
                <CardSearchSection key={index} item={item} />
              ))}
            </div>
          ) : (
            <p className="no-match">No match results</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
