import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setToggle(!toggle);
  };

  return (
    <div>
      {/* Header */}
      <div className="sm:w-11/12 lg:w-8/12 mx-auto my-2 bg-yellow-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems && toggle ? "⬆️" : "⬇️"}</span>{" "}
          {/* Change arrow direction based on accordion state */}
        </div>
        {/* Body */}
        <div>{showItems && toggle && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
