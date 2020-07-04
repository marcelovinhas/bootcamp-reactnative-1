/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
  static propTypes = {
    // valida as PropTypes do arquivo
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      // ve se o estado antigo é igual ao atual, ve se mudou algo
      AsyncStorage.setItem('users', JSON.stringify(users)); // como não tem nada depois não precisa do await
    }
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    this.setState({
      loading: true /* loading true antes de começar a fazer a chamada a api */,
    });

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
      loading: false, // já carregou os dados da api
    });

    Keyboard.dismiss(); // para o teclado sumir depois que adicionar
  };

  handleNavigate = (user) => {
    const { navigation } = this.props;

    navigation.navigate('User', { user }); // em aspas nome da tela, dentro das chaves o parâmetro
  };

  render() {
    const { users, newUser, loading } = this.state;

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
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {/* se loading for true coloca ActivityIndicator, se não coloca o ícone */}
            {/* ActivityIndicator é o sinal de carregamento que já vem estilizado por padrão */}
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
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

              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
