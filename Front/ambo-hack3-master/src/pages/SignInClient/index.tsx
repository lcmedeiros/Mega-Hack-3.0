import React, {useState} from "react";
import { CheckBox, KeyboardAvoidingView, Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Container, ViewButton } from './styles';
import Ambev from '../../assets/logo.png';
import { AntDesign as ReturnIcon } from '@expo/vector-icons'

import { Logo, RedBall, Title } from '../../components/Logo/styles';
import { Input, Label } from '../../components/Input/styles';
import { styles, TextButton } from '../../components/Button/styles';
import { returnButton } from '../../components/ReturnButton/styles';
import api from '../../services/api';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const SignInClient: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation()

  function handleNavigateToLogin() {    
    navigation.navigate('Login');
  }

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <RedBall></RedBall>
      <View style={returnButton.ReturnButton}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <ReturnIcon name="left" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Logo source={Ambev} resizeMode="center" />
      <Title>Cadastro</Title>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Label>NOME *</Label>
        <Input 
          placeholder="seu nome"
          autoCorrect={false}
          
        />
        <Label>E-MAIL *</Label>
        <Input 
          placeholder="seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>SENHA *</Label>
        <Input 
          placeholder="sua senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          
        />
        <View style={styled.checkboxContainer}>
          <CheckBox
            value={checked}
            onValueChange={setChecked}
            style={styled.checkbox}
          />
          <Text style={styled.label}>Concorda com termos de serviço</Text>
        </View>
      </KeyboardAvoidingView>
      <ViewButton>
      <RectButton 
        style={styles.button}
        onPress={handleNavigateToLogin}
      >
        <TextButton>Criar Conta</TextButton>
      </RectButton>
      </ViewButton>
    </Container>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default SignInClient;