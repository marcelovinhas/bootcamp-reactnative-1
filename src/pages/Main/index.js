import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Main({ navigation }) {
  function navigateToUsers() {
    navigation.navigate('User');
  }

  return (
    <View>
      <Text>Home</Text>
      <Button title="Navigate to users" onPress={navigateToUsers} />
    </View>
  );
}
