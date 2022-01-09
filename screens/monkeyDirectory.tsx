import React, { useEffect, useState } from "react";
import { SafeAreaView, SectionList } from "react-native";
import { Monkey, MonkeyDirectoryProps, RootObject } from "../interfaces/types";
import { monkeyData } from "../services/MonkeyService";
import { monkeyDirectoryStyles } from "../styles/componentStyles";
import Header from "../components/Header/Header";
import ProfileCard from "../components/ProfileCard/ProfileCard";

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
                    alignItems: "center",
                    justifyContent: "center",
                }}
                renderSectionHeader={({ section: { title } }) => (
                    <Header title={title} color="#d3d6db" />
                )}
                renderItem={({ item }) => (
                    <ProfileCard
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
