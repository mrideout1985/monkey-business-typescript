import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { CustomButtonProps } from "../../interfaces/interfaces";
import { buttonStyles } from "../../styles/componentStyles";

export default function CustomButton({
    onPress,
    btnText,
}: CustomButtonProps): JSX.Element {
    return (
        <TouchableOpacity
            style={buttonStyles.buttonContainer}
            onPress={onPress}
        >
            <Text style={buttonStyles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    );
}
