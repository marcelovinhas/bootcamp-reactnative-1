import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

// export default function Main({ navigation }) {
//   function navigateToUsers() {
//     navigation.navigate('User');
//   }

// <Text>Home</Text>
// <Button title="Navigate to users" onPress={navigateToUsers} />

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      // selecionar os dados que deseja pegar dos usuários
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data], // pega todos os dados já armazenados com a variável data
      newUser: '', // apaga o que estava dentro da caixa
    });

    Keyboard.dismiss(); // para o teclado sumir depois que adicionar
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false} // para não corrigir o nome do usuário automaticamente
            autoCapitalize="none" // para não dar Caps no nome do usuário
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#FFF" />
            {/* https://oblador.github.io/react-native-vector-icons/ */}
          </SubmitButton>
        </Form>

        <List
          data={users}
          // key extractor pega cada um dos usuários e precisa retornar um parâmetro único do usuário, no caso login
          keyExtractor={(user) => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
