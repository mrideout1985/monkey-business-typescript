import * as React from "react";
import { render } from "@testing-library/react-native";
import Header from "./Header";

test("render header component", () => {
    render(<Header title="rendered" />);
});

test("render Header Component, then rerender with new props", () => {
    const { getByText, rerender } = render(<Header title="Header" />);
    const header = getByText("Header");
    expect(header).toBeDefined();
    rerender(<Header title="NewHeader" />);
    const newHeader = getByText("NewHeader");
    expect(newHeader).toBeDefined();
});
