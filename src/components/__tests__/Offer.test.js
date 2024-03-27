import { render, screen } from "@testing-library/react";
import Offer from "../Offer";
import "@testing-library/jest-dom";

describe("Offer page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All Tests");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("after All Tests");
  // });

  // afterEach(() => {
  //   console.log("after Each");
  // });

  test("Should load Offer Component", () => {
    render(<Offer />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load Offer-input Component", () => {
    render(<Offer />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load Offer-input by placeholder test Component", () => {
    render(<Offer />);

    const inputOffer = screen.getByPlaceholderText("offer");

    //Assertion
    expect(inputOffer).toBeInTheDocument();
  });

  test("Should load all input boxes in Component", () => {
    render(<Offer />);

    const inputBox = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBox.length).toBe(2);
  });

  //!failed test
  // test("Should load Offer-Submit test present Component", () => {
  //   render(<Offer />);

  //   const button = screen.getByText("random");

  //   //Assertion
  //   expect(button).toBeInTheDocument();
  // });
});
