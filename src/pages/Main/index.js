import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

// export default function Main({ navigation }) {
//   function navigateToUsers() {
//     navigation.navigate('User');
//   }

// <Text>Home</Text>
// <Button title="Navigate to users" onPress={navigateToUsers} />

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false} // para não corrigir o nome do usuário automaticamente
          autoCapitalize="none" // para não dar Caps no nome do usuário
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#FFF" />
          {/* https://oblador.github.io/react-native-vector-icons/ */}
        </SubmitButton>
      </Form>
    </Container>
  );
}
