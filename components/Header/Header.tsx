import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderProps } from "../../interfaces/interfaces";

export default function Header({
  title,
  bgColor,
  fontSize,
  color,
}: HeaderProps) {
  const headerStyles = StyleSheet.create({
    container: {
      backgroundColor: `${bgColor || "transparent"}`,
      flexDirection: "row",
    },
    titleContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontFamily: "Poppins-Bold",
      fontSize: fontSize || 32,
      textAlign: "center",
      color: color || "black",
      padding: 10,
    },
    btn: {
      position: "absolute",
      top: 0,
      backgroundColor: "red",
    },
  });

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.titleContainer}>
        <Text style={headerStyles.title}>{title}</Text>
      </View>
    </View>
  );
}
