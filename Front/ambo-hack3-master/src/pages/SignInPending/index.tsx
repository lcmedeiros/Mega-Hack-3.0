import React from 'react';
import Ambev from '../../assets/logo.png';

import { Container, PendingTitle, PendingText, ViewButton } from './styles';
import { Logo, RedBall } from '../../components/Logo/styles';
import { styles, TextButton } from '../../components/Button/styles';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigationToHome() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <RedBall></RedBall>
      <Logo source={Ambev} resizeMode="center" />
      <PendingTitle>Recebemos sua Solicitação!</PendingTitle>
      <PendingText>
        Ela ja foi enviada para analise da Ambev e logo retornaremos
        com uma resposta via e-mail, vc podera acessar todas as funções
        do app via o campo de login.
      </PendingText>
      <ViewButton>
        <RectButton 
          style={styles.button} 
          onPress={handleNavigationToHome}
        >
          <TextButton>Voltar</TextButton>
        </RectButton>
      </ViewButton>
    </Container>
  );
}


export default Home;