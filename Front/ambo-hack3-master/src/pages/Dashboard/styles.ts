import { StyleSheet } from 'react-native'
import styled from 'styled-components/native';

export const Busca = styled.View`
  flex: 1;
  margin-top: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  background-color: white;
  border: 2px #958f90;
  border-radius: 5px;
  border-width: 1px;
  margin-left: 60px;
  margin-top: 200px;
  background: #f4f4f5;
`;

export const BuscaText = styled.TextInput`
  width: 278px;
  height: 40px;
  background: #f4f4f5;
  padding-right: 16px;
  padding-left: 16px;
  font-family: Roboto_400Regular;
  font-size: 16px;
`;

export const FilterButtonText = styled.Text`
  font-size: 14px;
  padding-left: 25px;
  padding-right: 25px;
  color: white;
  font-family: Roboto_500Medium;
`;

export const FilterBox = styled.View`
  background: #AA0D2B;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: 2px #958f90;
  border-radius: 5px;
  border-width: 1px;
`;

export const Filter = StyleSheet.create({
  itens: {
    alignItems: "center",
    justifyContent: "center",
  }
})