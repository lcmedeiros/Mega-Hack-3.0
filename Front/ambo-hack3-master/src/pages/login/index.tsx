import React from "react";
import {  KeyboardAvoidingView,  Platform, View, TouchableOpacity } from "react-native";
import { AntDesign as ReturnIcon } from '@expo/vector-icons'
import { Container, ViewButton, TestView } from './styles';
import Ambev from '../../assets/logo.png'

import { RedBall, Logo, Title } from '../../components/Logo/styles';
import { Input, Label } from '../../components/Input/styles';
import { styles, TextButton } from '../../components/Button/styles';
import { returnButton } from '../../components/ReturnButton/styles';
import api from '../../services/api';

import loginPayload from '../../mocks/login';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToDashboard() {


    api.post('/sessions/users', loginPayload).then(
      (res)=>{
        console.log((res.data));
        navigation.navigate('Dashboard');
      }
    );
    
  }

  function handleNavigateBack() {
    navigation.navigate('Home')
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
      <TestView>
        <Title>Login</Title>
      </TestView>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Label>E-MAIL *</Label>
        <Input 
          placeholder="seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={loginPayload.email}
          editable={false}
        />

        <Label>SENHA *</Label>
        <Input 
          placeholder="sua senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={loginPayload.password}
          editable={false}
        />

      </KeyboardAvoidingView>
      <ViewButton>
      <RectButton 
        style={styles.button}
        onPress={handleNavigateToDashboard}
      >
        <TextButton>Entrar</TextButton>
      </RectButton>
      </ViewButton>
    </Container>
  );
}

export default Login;