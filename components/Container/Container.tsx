import React from "react";
import { StyleSheet, View } from "react-native";

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export function Container({ children, backgroundColor }: ContainerProps) {
  const styles = StyleSheet.create({
    container: {
      elevation: 5,
      backgroundColor: backgroundColor || "white",
      justifyContent: "center",
      borderRadius: 15,
      flex: 1,
    },
  });
  return <View style={styles.container}>{children}</View>;
}
