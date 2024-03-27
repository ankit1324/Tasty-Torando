import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { RES_IMG } from "../../utils/constants";

const itemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch the Action
    dispatch(addItem(item));
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-slate-400 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="w-52  font-semibold text-black-300 ">
                  {item.card.info.name}
                </span>
                <span className="font-normal">
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs ">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 rounded-xl p-4 ">
              <button
                className="bg-orange-400 ml-1 md:bg-slate-800 text-white active:animate-fade shadow-lg p-1 md:absolute  md:mt-18  rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              <img
                src={RES_IMG + item.card.info.imageId}
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default itemList;
