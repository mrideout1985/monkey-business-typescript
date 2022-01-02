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
