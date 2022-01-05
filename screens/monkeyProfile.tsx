import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MonkeyPageProps } from "../interfaces/types";
import { profileStyles } from "../styles/componentStyles";

export default function MonkeyProfile({
  route,
  navigation,
}: MonkeyPageProps<"MonkeyProfile">) {
  const { name, age, bananas, img } = route.params;
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
