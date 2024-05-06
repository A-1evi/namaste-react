import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resCardMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render search component after click", async () => {
  await act(async () => render(<Body></Body>));

  const searchBtn = screen.getByText("Search");

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");
  console.log(cards);

  expect(cards.length).toBe(4);
});
