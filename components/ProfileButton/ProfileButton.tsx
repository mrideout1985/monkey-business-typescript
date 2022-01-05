import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { profileButtonStyles } from "../../styles/componentStyles";

interface ProfileButtonProps {
  onPress: () => void;
  btnText: string;
  image: string;
}

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
