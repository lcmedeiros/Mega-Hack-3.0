import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  background: #AA0D2B;
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextMenu = styled.Text`
  font-size: 14px;
  padding-left: 25px;
  padding-right: 25px;
  color: white;
  font-family: Roboto_500Medium;
`;

export const Menu = StyleSheet.create({
  itens: {
    alignItems: "center",
    justifyContent: "center",
  }
})