import { RES_IMG } from "../../utils/constants";
// import { useContext } from "react";
// import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  // const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <div
        data-testid="resCard"
        className="bg-yellow-100 rounded-lg w-64 h-96 m-2 p-2 hover:bg-yellow-200"
      >
        <img
          className="h-48 w-56 ml-2 rounded-xl"
          src={RES_IMG + resData.info.cloudinaryImageId}
          alt=""
        />
        <div className="mb-8 h-20 card-info">
          <p className="m-2 text-base font-semibold">{resData.info.name}</p>
          <p className="m-2 text-sm font-normal">
            {resData.info.cuisines.join(", ")}
          </p>
        </div>
        <div className="card-footer">
          <span className="m-2 font-medium mr-4">
            {resData.info.costForTwo}
          </span>
          <span className="m-2 font-medium">
            {resData.info.avgRating}⭐ Rating
          </span>
          {/* context api */}
          {/* <span className="m-2 font-xs">{loggedInUser}</span> */}
        </div>
      </div>
    </>
  );
};

//? Higher Order Components
//? input: restaurant card ==> restaurant Card top rated

export const withTopRatedLabel = (RestaurantCard) => {
  // return function component 👇
  return (props) => {
    return (
      <>
        <label className="m-[1px] p-2 hover:animate-fade rounded-lg absolute bg-slate-600 text-sm text-white">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
export default RestaurantCard;
