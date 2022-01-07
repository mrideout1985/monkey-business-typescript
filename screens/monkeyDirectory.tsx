import React, { useEffect, useState } from "react";
import { SafeAreaView, SectionList } from "react-native";
import Header from "../components/Header/Header";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import { Monkey, MonkeyDirectoryProps, RootObject } from "../interfaces/types";
import { monkeyData } from "../services/MonkeyService";
import { monkeyDirectoryStyles } from "../styles/componentStyles";

export default function MonkeyDirectory({
    navigation,
}: MonkeyDirectoryProps<"MonkeyDirectory">) {
    const [monkeys, setMonkeys] = useState<RootObject>();

    useEffect(() => {
        monkeyData.getData().then((data) => {
            setMonkeys(data);
        });
    }, [monkeys]);

    const data = [
        {
            title: "Monkeys",
            data: monkeys?.monkeys as Monkey[],
        },
    ];
    const sections = monkeys ? data : [];

    return (
        <SafeAreaView style={monkeyDirectoryStyles.container}>
            <SectionList
                sections={sections}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                renderSectionHeader={({ section: { title } }) => (
                    <Header title={title} color="#d3d6db" />
                )}
                renderItem={({ item }) => (
                    <ProfileButton
                        onPress={() =>
                            navigation.navigate("MonkeyProfile", item)
                        }
                        btnText={item.name}
                        image={item.img}
                    />
                )}
            />
        </SafeAreaView>
    );
}
