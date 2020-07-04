import React from 'react';
import { View } from 'react-native';

export default function User({ route }) {
  console.tron.log(route.params?.user ?? 'user'); // novo jeito de usar getParams

  return <View />;
}
