import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ProfileButtonProps } from "../../interfaces/interfaces";
import { profileButtonStyles } from "../../styles/componentStyles";

export default function ProfileButton({
  onPress,
  btnText,
  image,
}: ProfileButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={profileButtonStyles.buttonContainer}
      onPress={onPress}
    >
      <View style={profileButtonStyles.shadow}>
        <Image source={{ uri: image }} style={profileButtonStyles.image} />
      </View>
      <View style={profileButtonStyles.textContainer}>
        <Text style={profileButtonStyles.btnText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
}
