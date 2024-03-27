import { render, screen } from "@testing-library/react";
import RestaurantCard, { withTopRatedLabel } from "../RestaurantCard";
import { MOCK_DATA } from "../../mocks/resCardMock";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const headingName = screen.getByText("Grover Sweets & Bakers");
  expect(headingName).toBeInTheDocument();
});

it("should render RestaurantCard with top rated Label", () => {
  const TopRatedRestaurantCard = withTopRatedLabel(RestaurantCard);
  {
    MOCK_DATA.info.avgRating >= 4.5
      ? render(<TopRatedRestaurantCard resData={MOCK_DATA} />)
      : render(<RestaurantCard resData={MOCK_DATA} />);
  }

  const topRated = screen.getByText("Top Rated");
  expect(topRated).toBeInTheDocument();
});
