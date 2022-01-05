import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type Monkey = {
  id: number;
  name: string;
  age: number;
  bananas: number;
  img: string;
};

export type RootObject = {
  return: boolean;
  monkeys: Monkey[];
};

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  MonkeyDirectory: Monkey[];
  MonkeyProfile: Monkey;
};

export type MonkeyProfileParamList = {
  MonkeyProfile: Monkey;
  MonkeyDirectory: undefined;
};

export type MonkeyPageProps<T extends keyof MonkeyProfileParamList> = {
  route: RouteProp<MonkeyProfileParamList, T>;
  navigation: StackNavigationProp<MonkeyProfileParamList, T>;
};

export type MonkeyParamList = {
  MonkeyDirectory: undefined;
  MonkeyProfile: Monkey;
};

export type HomeParamList = {
  Home: undefined;
  Monkeys: undefined;
};

export type HomeProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};

export type MonkeyDirectoryProps<T extends keyof MonkeyParamList> = {
  navigation: StackNavigationProp<MonkeyParamList, T>;
  route: RouteProp<MonkeyParamList, T>;
};
