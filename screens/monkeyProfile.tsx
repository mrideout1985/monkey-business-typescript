import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MonkeyPageProps } from "../interfaces/types";
import { from } from "../assets/data/from";

const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: "#be3144",
    padding: 10,
    flex: 1,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 10,
    position: "relative",
    borderRadius: 15,
  },
  infoContainer: {
    borderRadius: 15,
    padding: 10,
    flex: 1,
  },
  mainInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "black",
    fontFamily: "Poppins-Bold",
    fontSize: 32,
  },
  age: {
    fontFamily: "Poppins-Regular",
  },
  from: {
    fontFamily: "Poppins-Regular",
    fontSize: 25,
    alignSelf: "center",
  },
  bananas: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "black",
    alignSelf: "center",
  },
});

export default function MonkeyProfile({
  route,
  navigation,
}: MonkeyPageProps<"MonkeyProfile">) {
  const { id, name, age, bananas, img } = route.params;
  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.image}>
        <Ionicons
          name="ios-arrow-back-circle"
          color="#eff7e1"
          style={{ position: "absolute", top: 10, left: 10, zIndex: 99 }}
          size={50}
          onPress={() => navigation.navigate("MonkeyDirectory")}
        />
        <Image
          source={{ uri: img }}
          style={{
            height: "100%",
            borderRadius: 15,
            resizeMode: "cover",
          }}
        />
      </View>
      <View style={profileStyles.infoContainer}>
        <View style={profileStyles.mainInformation}>
          <Text style={profileStyles.name}>
            {name}
            <Text style={profileStyles.age}>, {age} </Text>
          </Text>
          {/* <Text style={profileStyles.from}>Born: {from[id - 1]}</Text> */}
          <Text style={profileStyles.bananas}>Bananas: {bananas} </Text>
        </View>
      </View>
    </View>
  );
}
