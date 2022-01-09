import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { ProfileCardProps } from "../../interfaces/interfaces";
import { profileCardStyles } from "../../styles/componentStyles";

export default function ProfileCard({
    onPress,
    btnText,
    image,
}: ProfileCardProps): JSX.Element {
    return (
        <TouchableOpacity style={profileCardStyles.container} onPress={onPress}>
            <View style={profileCardStyles.shadow}>
                <Image
                    source={{ uri: image }}
                    style={profileCardStyles.image}
                />
            </View>
            <View style={profileCardStyles.textContainer}>
                <Text style={profileCardStyles.btnText}>{btnText}</Text>
            </View>
        </TouchableOpacity>
    );
}
