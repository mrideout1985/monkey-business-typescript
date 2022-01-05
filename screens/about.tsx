import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header/Header";
import { globalStyles } from "../styles/global";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraph}>
        Monkey Business is a directory of Monkeys in a zoo. Users are able to
        view a list of monkeys along with their age and the number of bananas
        they have. When you click a Monkey it will then show their information
        in a profile style view along with a photo of the Monkey.
      </Text>
    </View>
  );
}
