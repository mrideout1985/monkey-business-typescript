import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useGetMonkeys } from '../hooks/useGetMonkeys';
import Header from '../components/Header/Header';
import CustomButton from '../components/CustomButton/CustomButton';
import { RootStackParamList } from '../interfaces/interfaces';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2b2b',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const result = useGetMonkeys();
  const monkeyData = result?.monkeys ?? [];

  return (
    <View style={homeStyles.container}>
      <Header title="Monkey Business" />
      <View style={homeStyles.btnContainer}>
        <CustomButton btnText="About" onPress={() => navigation.navigate('About')} />
        <CustomButton
          btnText="Monkeys"
          onPress={() => navigation.navigate('MonkeyDirectory', monkeyData)}
        />
      </View>
    </View>
  );
}
