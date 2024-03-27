import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import RestaurantPage from "../RestaurantPage";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should render Restaurant menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantPage />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Premium Thalis (3)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(3);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart(2)")).toBeInTheDocument();
});

it("should render Cart with updated Values", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantPage />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const cartValue = screen.getByText("Cart(2)");
  expect(cartValue).toBeInTheDocument();

  fireEvent.click(cartValue);

  const getItemsInCart = screen.getAllByTestId("foodItems");
  expect(getItemsInCart.length).toBe(2);

  //   fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
});

it("should render Cart with working clear cartBtn", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantPage />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const getItemsInCart = screen.getAllByTestId("foodItems");
  expect(getItemsInCart.length).toBe(2);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  const clearCart = screen.getByText("Cart is empty");
  expect(clearCart).toBeInTheDocument();
});
