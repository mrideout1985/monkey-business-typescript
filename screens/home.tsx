import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { HomeProps } from "../interfaces/types";
import { homeStyles } from "../styles/componentStyles";

export default function Home({ navigation }: HomeProps<"Monkeys">) {
    return (
        <View style={homeStyles.container}>
            <Header title="Monkey Business" color="#d3d6db" />
            <Container backgroundColor="#d3d6db">
                <Text style={homeStyles.text}>
                    Monkey Business is a directory of Monkeys in a zoo. Users
                    are able to view a list of monkeys along with their age and
                    the number of bananas they have. When you click a Monkey it
                    will then show their information in a profile style view
                    along with a photo of the Monkey. Please click the
                    &quot;Monkeys&quot; tab, or the icon below to view our
                    monkeys.
                </Text>
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
