import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const profileButtonStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#1d1716',
    borderRadius: 25,
    paddingVertical: 10,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#fdf6f6',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

interface ProfileButtonProps {
  onPress: () => void;
  btnText: string;
  image: string;
}

export default function ProfileButton({
  onPress,
  btnText,
  image,
}: ProfileButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={profileButtonStyles.buttonContainer} onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 100,
          marginLeft: 10,
        }}
      />
      <View style={profileButtonStyles.textContainer}>
        <Text style={profileButtonStyles.btnText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
}
