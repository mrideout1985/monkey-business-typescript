import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

interface MonkeyProfile {
  route: any;
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2b2b',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 6%, 8%, 0.8)',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 70,
  },
  infoContainer: {
    marginTop: 32,
  },
  infoText: {},
  name: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
  },
  otherInfo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  otherTextOuter: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#fff',
  },
  otherTextInner: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#fff',
  },
});

export default function MonkeyProfile({ route }: MonkeyProfile) {
  const { id, name, age, bananas, img } = route.params;
  return (
    <View style={profileStyles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: img }}
        style={{ height: '100%' }}
        blurRadius={5}
      >
        <View style={profileStyles.overlay} />
        <View style={profileStyles.profileContainer}>
          <Image
            source={{ uri: img }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
            }}
          />
          <View style={profileStyles.infoContainer}>
            <Text style={[profileStyles.infoText, profileStyles.name]}>{name}</Text>
            <View style={profileStyles.otherInfo}>
              <Text style={profileStyles.otherTextOuter}>
                Age: <Text style={profileStyles.otherTextInner}>{age}</Text>
              </Text>
              <Text style={profileStyles.otherTextOuter}>
                Bananas: <Text style={profileStyles.otherTextInner}>{bananas}</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
