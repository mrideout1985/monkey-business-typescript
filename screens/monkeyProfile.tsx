import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Image } from "react-native";
import { MonkeyPageProps } from "../interfaces/types";
import { profileStyles } from "../styles/componentStyles";
import { monkeyBirthPlace } from "../assets/data/moreMonkeyData";

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
                    style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        zIndex: 99,
                    }}
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
                    <Text style={profileStyles.bananas}>
                        Bananas: {bananas}{" "}
                    </Text>
                </View>
                <Text style={profileStyles.from}>
                    Born: {monkeyBirthPlace[id - 1]}
                </Text>
            </View>
        </View>
    );
}
