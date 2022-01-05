import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const profileButtonStyles = StyleSheet.create({
  buttonContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 22,
    backgroundColor: "#d3d6db",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 350,
    height: 350,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  shadow: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    marginTop: -20,
  },
  btnText: {
    fontSize: 28,
    fontFamily: "Poppins-Bold",
    color: "#2c2c2c",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

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
