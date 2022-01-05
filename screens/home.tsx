import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Header from "../components/Header/Header";
import { globalStyles } from "../styles/global";

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#be3144",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "hsla(0, 6%, 8%, 0.8)",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 70,
  },
  infoContainer: {
    marginTop: 32,
  },
  infoText: {},
  name: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 32,
  },
  otherInfo: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  otherTextOuter: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#fff",
  },
  otherTextInner: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#fff",
  },
});

export default function Home() {
  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.overlay} />
      <View style={profileStyles.profileContainer}>
        <Header title="Monkey Business" bgColor="transparent" fontSize={30} />
        <View style={profileStyles.infoContainer}>
          <View style={profileStyles.otherInfo}>
            <Text style={globalStyles.paragraph}>
              Monkey Business is a directory of Monkeys in a zoo. Users are able
              to view a list of monkeys along with their age and the number of
              bananas they have. When you click a Monkey it will then show their
              information in a profile style view along with a photo of the
              Monkey.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
