/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { Platform, StatusBar, View } from "react-native";
import MonkeyStack from "./MonkeyStack";
import { TabParamList } from "../interfaces/types";
import Home from "../screens/Home";

const Tabs = createBottomTabNavigator<TabParamList>();

export function TabStack(): JSX.Element {
    const isAndroid = Platform.OS === "android";
    const iconName = (
        focused: boolean,
        route: RouteProp<TabParamList, keyof TabParamList>,
    ) => {
        if (route.name === "Home") {
            return focused ? "ios-home" : "ios-home-outline";
        }
        if (route.name === "Monkeys") {
            return focused ? "md-list-circle" : "md-list-circle-outline";
        }

        return undefined;
    };

    return (
        <>
            {isAndroid ? <StatusBar barStyle="default" /> : null}
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={iconName(focused, route)}
                            size={35}
                            color="#be3144"
                        />
                    ),
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
        </>
    );
}
