import React from "react";
import { SafeAreaView, SectionList } from "react-native";
import Header from "../components/Header/Header";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import { useGetMonkeys } from "../hooks/useGetMonkeys";
import { MonkeyDirectoryProps } from "../interfaces/types";
import { monkeyDirectoryStyles } from "../styles/componentStyles";

export default function MonkeyDirectory({
  navigation,
}: MonkeyDirectoryProps<"MonkeyDirectory">) {
  const result = useGetMonkeys();
  const monkeyData = result?.monkeys ?? [];
  const DATA = [
    {
      title: "Monkeys",
      data: monkeyData,
    },
  ];
  return (
    <SafeAreaView style={monkeyDirectoryStyles.container}>
      <SectionList
        sections={DATA}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Header title={title} color="#d3d6db" />
        )}
        renderItem={({ item }) => (
          <ProfileButton
            onPress={() => navigation.navigate("MonkeyProfile", item)}
            btnText={item.name}
            image={item.img}
          />
        )}
      />
    </SafeAreaView>
  );
}
