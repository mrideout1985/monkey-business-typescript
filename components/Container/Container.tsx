import React from "react";
import { StyleSheet, View } from "react-native";
import { ContainerProps } from "../../interfaces/interfaces";

export default function Container({
    children,
    backgroundColor,
}: ContainerProps) {
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
