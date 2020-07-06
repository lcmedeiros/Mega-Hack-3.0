import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Container, TextMenu, Menu } from '../../components/Menu/styles'
import { Hello, TextHello } from '../../components/Header/styles'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToDashboard(){
    navigation.navigate('Dashboard')
  }
  
  function handleNavigateToReservation(){
    navigation.navigate('Reservation')
  }

  function handleNavigateToGifts(){
    navigation.navigate('Gifts')
  }

  return (
    <>
      <View style={styles.mapContainer}>
        <Hello>
          <TextHello>Olá João, Você tem 10 Amb-Coins</TextHello>
        </Hello>
      </View>
      <Container>
        <TouchableOpacity 
          style={Menu.itens}
          onPress={handleNavigateToDashboard}
        >
          <AntDesign name="home" size={24} color="white" />
          <TextMenu>Início</TextMenu>
        </TouchableOpacity>
        <TouchableOpacity 
          style={Menu.itens}
          onPress={handleNavigateToReservation}
        >
          <FontAwesome name="bookmark-o" size={24} color="white" />
          <TextMenu>Reservas</TextMenu>
        </TouchableOpacity>
        <TouchableOpacity 
          style={Menu.itens}
          onPress={handleNavigateToGifts}
        >
          <SimpleLineIcons name="present" size={24} color="white" />
          <TextMenu>Prêmios</TextMenu>
        </TouchableOpacity>
        <TouchableOpacity 
          style={Menu.itens}
          onPress={() => {}}
        >
          <AntDesign name="user" size={24} color="white" />
          <TextMenu>Perfil</TextMenu>
        </TouchableOpacity>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: "#f4f4f5",
  },

  map: {
    width: '100%',
    height: '100%',
    position: "absolute",
  },
})
export default Profile;