import React from "react";

import { render, cleanup } from "@testing-library/react";
import Appointment from "components/Appointment/index";
import { types } from "@babel/core";

afterEach(cleanup);
describe("Form", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});
