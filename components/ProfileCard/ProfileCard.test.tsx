import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProfileCard from "./ProfileCard";

test("it renders <ProfileCard/>", () => {
    render(<ProfileCard btnText="Hello" image="" />);
});

test("onPress gets called", () => {
    const text = "Button";
    const mockFunction = jest.fn();
    const { getByText } = render(
        <ProfileCard btnText={text} onPress={mockFunction} image={text} />,
    );
    const button = getByText(text);

    fireEvent.press(button);

    expect(mockFunction).toBeCalled();
});
