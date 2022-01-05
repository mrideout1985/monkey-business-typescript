import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
  onPress?: () => void;
  btnText: string;
}

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    elevation: 12,
    backgroundColor: "#1d1716",
    borderRadius: 25,
    paddingVertical: 10,
    margin: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: "#fdf6f6",
    textTransform: "uppercase",
  },
});

export default function CustomButton({
  onPress,
  btnText,
}: CustomButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={buttonStyles.buttonContainer} onPress={onPress}>
      <Text style={buttonStyles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
}
