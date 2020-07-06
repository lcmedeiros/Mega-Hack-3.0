import React from 'react';
import Ambev from '../../assets/logo.png';
import { Container, ViewButton } from './styles';

import { Logo, RedBall } from '../../components/Logo/styles';
import { styles, TextButton } from '../../components/Button/styles';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToSignInSelectAccType() {
    navigation.navigate('SignInSelectAccType')
  }

  function handleNavigateToLogin(){
    navigation.navigate('Login')
  }

  return (
    <Container>
      <RedBall></RedBall>
      <Logo source={Ambev} resizeMode="center" />
      <ViewButton>
        <RectButton 
          style={styles.button} 
          onPress={handleNavigateToLogin}
        >
          <TextButton>Login</TextButton>
        </RectButton>
        <RectButton 
          style={styles.button} 
          onPress={handleNavigateToSignInSelectAccType}
        >
          <TextButton>Cadastro</TextButton>
        </RectButton>
      </ViewButton>
    </Container>
  );
}


export default Home;