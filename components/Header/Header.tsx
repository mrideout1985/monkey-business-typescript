import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#2e2b2b',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: '#fdf6f6',
    margin: 10,
  },
});

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
}
