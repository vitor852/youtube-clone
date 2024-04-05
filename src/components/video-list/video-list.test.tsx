import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import VideoList from "./index";

test("Loads and display video list.", async () => {
  render(<VideoList />, { wrapper: BrowserRouter });
});
