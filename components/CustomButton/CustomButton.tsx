import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { buttonStyles } from "../../styles/componentStyles";

interface CustomButtonProps {
  onPress?: () => void;
  btnText: string;
}

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
