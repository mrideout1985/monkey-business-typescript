import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProfileButton from "./ProfileButton";

test("it renders <ProfileButton/>", () => {
  render(<ProfileButton btnText="Hello" image="" />);
});

test("onPress gets called", () => {
  const text = "Button";
  const abc = jest.fn();
  const { getByText } = render(
    <ProfileButton btnText={text} onPress={abc} image={text} />,
  );
  const button = getByText(text);
  fireEvent.press(button);
  expect(abc).toBeCalled();
});
