import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'; // RectButton é para botão retangular

export const Container = styled.View`
  /* geralmente coloca flex: 1 e padding: 30px em todos containers  */
  flex: 1;
  padding: 30px;
  /* background: #ee5; */
`;
export const Form = styled.View`
  flex-direction: row; /* input e botão ficar um ao lado do outro */
  padding-bottom: 20px; /*  distância entre a caixa e a lista */
  border-bottom-width: 1px;
  border-color: red;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999' /* cor do que está escrito dentro da caixa */,
})`
  flex: 1;
  height: 40px;
  background: #5eee;
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
`;
