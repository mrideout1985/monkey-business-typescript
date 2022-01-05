import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "./CustomButton";

test("it renders <CustomButton/>", () => {
    render(<CustomButton btnText="Hello" />);
});

test("onPress gets called", () => {
    const text = "Button";
    const mockFunction = jest.fn();
    const { getByText } = render(
        <CustomButton btnText={text} onPress={mockFunction} />,
    );
    const button = getByText(text);
    fireEvent.press(button);
    expect(mockFunction).toBeCalled();
});
