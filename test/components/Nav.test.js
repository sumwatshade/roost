import React from "react";
import { render } from "@testing-library/react";

import Nav from "../../components/Nav";

jest.mock("../../components/NextMuiLink");

describe("Nav Component", () => {
  test("renders in default state", () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});
