import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../interfaces/types";
import MonkeyDirectory from "../screens/MonkeyDirectory";
import MonkeyProfile from "../screens/MonkeyProfile";

const Stack = createNativeStackNavigator<RootStackParamList>();

function MonkeyStack() {
    return (
        <Stack.Navigator
            defaultScreenOptions={{ animation: "slide_from_bottom" }}
            screenOptions={{
                headerTitleAlign: "left",
                headerTitleStyle: {
                    fontSize: 32,
                    fontFamily: "Poppins-Bold",
                },
                header: () => null,
            }}
        >
            <Stack.Screen name="MonkeyDirectory" component={MonkeyDirectory} />
            <Stack.Screen name="MonkeyProfile" component={MonkeyProfile} />
        </Stack.Navigator>
    );
}

export default MonkeyStack;
