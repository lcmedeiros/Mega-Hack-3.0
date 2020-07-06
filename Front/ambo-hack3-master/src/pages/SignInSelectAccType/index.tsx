import React, { useState } from 'react';
import { Container, SelectText, ViewButton } from './styles';
import { Picker, TouchableOpacity, View } from "react-native";
import Ambev from '../../assets/logo.png'
import { AntDesign as ReturnIcon } from '@expo/vector-icons'

import { RedBall, Logo } from '../../components/Logo/styles';
import { styles, TextButton } from '../../components/Button/styles';
import { returnButton } from '../../components/ReturnButton/styles';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function SignInSelectAccType() {
  const [selectedValue, setSelectedValue] = useState("client");
  const navigation = useNavigation()

  function handleNavigateToCreateAccount() {
    if (selectedValue === 'client') {
      return navigation.navigate('SignInClient')
    }
    if (selectedValue === 'point') {
      return navigation.navigate('SignInPoint')
    }
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
      <SelectText>Selecione seu tipo de Conta.</SelectText>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 250, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Cliente" value="client" />
        <Picker.Item label="Estabelecimento" value="point" />
      </Picker>
      <ViewButton>
        <RectButton 
        style={styles.button}
        onPress={handleNavigateToCreateAccount}
        >
          <TextButton>Continuar</TextButton>
        </RectButton>
      </ViewButton>
    </Container>
  )
}

export default SignInSelectAccType;