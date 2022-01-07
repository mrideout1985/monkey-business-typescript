import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { homeText } from "../assets/data/homeText";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { HomeProps } from "../interfaces/types";
import { homeStyles } from "../styles/componentStyles";

export default function Home({ navigation }: HomeProps<"Monkeys">) {
    return (
        <View style={homeStyles.container}>
            <Header title="Monkey Business" color="#d3d6db" />
            <Container backgroundColor="#d3d6db">
                <Text style={homeStyles.text}>{homeText}</Text>
                <TouchableOpacity
                    style={homeStyles.monkey}
                    onPress={() => navigation.navigate("Monkeys")}
                >
                    <Image
                        source={require("../assets/images/monkey.png")}
                        style={{ height: 135, width: 130, alignSelf: "center" }}
                    />
                </TouchableOpacity>
            </Container>
        </View>
    );
}
