import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstInput = screen.getByLabelText(/first name/i);
  const lastInput = screen.getByLabelText(/last name/i);
  const addInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const checkoutBtn = screen.getByRole(/button/i);

  fireEvent.change(firstInput, { target: { value: "Nathan" } });
  expect(firstInput.value).toBe("Nathan");
  fireEvent.change(lastInput, { target: { value: "Dumas" } });
  fireEvent.change(addInput, { target: { value: "500 home rd" } });
  fireEvent.change(cityInput, { target: { value: "Westerville" } });
  fireEvent.change(stateInput, { target: { value: "Alaska" } });
  fireEvent.change(zipInput, { target: { value: "11111" } });

  fireEvent.click(checkoutBtn);
  const success = screen.getByText(/You have ordered some plants! Woo-hoo!/i);
  expect(success).toBeTruthy();
});
