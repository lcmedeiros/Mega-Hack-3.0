import React from "react";
import { CheckBox, KeyboardAvoidingView, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ViewButton, Container, TitleSignIn } from './styles';
import Ambev from '../../assets/logo.png';
import { AntDesign as ReturnIcon } from '@expo/vector-icons'

import { Logo, RedBall } from '../../components/Logo/styles';
import { Input, Label } from '../../components/Input/styles';
import { styles, TextButton } from '../../components/Button/styles';
import { returnButton } from '../../components/ReturnButton/styles';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const SignInPoint: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation()

  function handleNavigateToSignInPending(){
    navigation.navigate('SignInPending')
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
      <KeyboardAvoidingView style={styled.keyboardView} enabled={Platform.OS === 'ios'} behavior="padding">
        <ScrollView style={styled.scrollView}>
          <TitleSignIn>Cadastro</TitleSignIn>
          <Label>NOME *</Label>
          <Input 
            placeholder="seu nome"
            autoCorrect={false}
          />
          <Label>PHOTO *</Label>
          <Label>DESCRIÇÃO *</Label>
          <Input 
            placeholder="seu nome"
            autoCorrect={false}
          />
          <Label>LOCALIZAÇÃO *</Label>
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
          <ViewButton>
            <RectButton 
              style={styles.button}
              onPress={handleNavigateToSignInPending}
              >
              <TextButton>Criar Conta</TextButton>
            </RectButton>
          </ViewButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styled = StyleSheet.create({
  container: {
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
  scrollView: {
    width: 500
  },
  keyboardView: {
    marginLeft: 220
  }
});

export default SignInPoint;