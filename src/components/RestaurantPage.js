import Shimmer from "../components/Shimmer";
import { RES_IMG } from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <>
      <div>
        <div className="m-4 p-4 flex  justify-center">
          <img
            src={RES_IMG + cloudinaryImageId}
            alt=""
            className="w-72 h-72 rounded-full"
          />
        </div>
        <div className="m-4 p-4 flex-col text-center items-center justify-center">
          <h1 className="font-semibold text-3xl mb-6">
            {name} - {avgRating}⭐
          </h1>
          <h2 className="font-medium text-2xl mb-6">
            {cuisines.join(", ")} - {costForTwoMessage}
          </h2>
          <h2 className="font-medium underline underline-offset-8 text-2xl mb-6">
            Menu
          </h2>

          {/*todo Categories accordion */}

          {categories.map((category, index) => (
            <RestaurantMenuCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex && true}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
          {/* just one category 
          <ul>
              {itemCards.map((item) => {
                return (
                  <li className="mb-2 font-semibold" key={item.card.info.id}>
                  {item.card.info.name} - ₹
                  {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                  </li>
                  );
                })}
              </ul> */}
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
