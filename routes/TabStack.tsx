/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, StatusBar, View } from "react-native";
import Home from "../screens/Home";
import MonkeyStack from "./MonkeyStack";
import { TabParamList } from "../interfaces/types";

const Tabs = createBottomTabNavigator<TabParamList>();

export function TabStack(): JSX.Element {
    return (
        <View style={{ flex: 1 }}>
            {Platform.OS === "android" && <StatusBar barStyle="default" />}
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused
                                ? "ios-home"
                                : "ios-home-outline";
                        } else if (route.name === "Monkeys") {
                            iconName = focused
                                ? "md-list-circle"
                                : "md-list-circle-outline";
                        }
                        return (
                            <Ionicons
                                name={iconName as never}
                                size={35}
                                color="#be3144"
                            />
                        );
                    },
                    tabBarActiveTintColor: "#be3144",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tabs.Screen
                    name="Home"
                    options={{
                        header: () => null,
                    }}
                    component={Home}
                />
                <Tabs.Screen
                    name="Monkeys"
                    options={{
                        header: () => null,
                    }}
                    component={MonkeyStack}
                />
            </Tabs.Navigator>
        </View>
    );
}
