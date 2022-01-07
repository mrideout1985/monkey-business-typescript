import * as React from "react";
import { render } from "@testing-library/react-native";
import Header from "./Header";

test("render header component", () => {
    render(<Header title="rendered" />);
});

test("render Header Component, with  props", () => {
    const { getByText } = render(<Header title="Header" />);
    const header = getByText("Header");

    expect(header).toBeDefined();
});
