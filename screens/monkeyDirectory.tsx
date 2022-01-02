import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../components/Header/Header';
import ProfileButton from '../components/ProfileButton/ProfileButton';
import { RootStackParamList } from '../interfaces/interfaces';

type Props = NativeStackScreenProps<RootStackParamList, 'MonkeyDirectory'>;

const monkeyDirectoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2b2b',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default function MonkeyDirectory({ navigation, route }: Props) {
  return (
    <View style={monkeyDirectoryStyles.container}>
      <Header title="Monkeys" />
      <FlatList
        data={route.params}
        renderItem={({ item }) => (
          <ProfileButton
            onPress={() => navigation.navigate('MonkeyProfile', item)}
            btnText={item.name}
            image={item.img}
          />
        )}
      />
    </View>
  );
}
