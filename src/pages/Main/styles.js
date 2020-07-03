import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'; // RectButton é para botão retangular

export const Container = styled.View`
  /* geralmente coloca flex: 1 e padding: 30px em todos containers  */
  flex: 1;
  padding: 30px;
`;
export const Form = styled.View`
  flex-direction: row; /* input e botão ficar um ao lado do outro */
  padding-bottom: 20px; /*  distância entre a caixa e a lista */
  border-bottom-width: 1px;
  border-color: #7159c1;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor:
    '#999' /* cor do que está escrito dentro da caixa, poderia estar no index.js */,
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px; /* distância entre o texto da caixa e a borda */
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center; /* e align-items alinha o conteúdo no total centro do botão */
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px; /* distância entre o botão e a caixa */
  padding: 0 12px; /* aumenta o tamanho do botão */
  /* pega as props do componente, se loading for true opacidade de 70%, se não 100% */
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false, // tira o visual da barra de rolagem
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px; /* 0 em cima, 20 nas laterais, 30 embaixo */
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px; /* no reactnative não dá pra usar %, coloca a metade dos pixels para ficar um círculo */
  background: #eee; /* enquanto a imagem não carrega mostra um efeito cinza */
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2, // o texto fica com apenas duas linhas
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px; /* distância entre a bio e o nome */
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch; /* para ficar com a largura total do componente */
  border-radius: 4px;
  background: #7159c1;
  justify-content: center; /* para o texto ficar totalmente no centro */
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase; /* coloca em letra maiúscula */
`;
