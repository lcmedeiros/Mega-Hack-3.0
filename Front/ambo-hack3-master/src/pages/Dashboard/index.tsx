import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { Busca, BuscaText, FilterButtonText, Filter, FilterBox } from './styles'

import { Container, TextMenu, Menu } from '../../components/Menu/styles'
import { Hello, TextHello } from '../../components/Header/styles'
import api from '../../services/api';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// import { Container } from './styles';


const Dashboard: React.FC = () => {
  const [currentRegion, setCurrentRegion] = useState<any>();
  
  const [establishments, setEstablishments] = useState<any[]>([]);
  
  const navigation = useNavigation();
  
  function getEstablishments() {
    
    interface Establishment {
      name: string;
      avatar_url: string;
      description: string;
      phoneNumber: string;
      email: string;
    }
    
    
    const res = api.get(`/establishments?latitude=-6.9796681&longitude=-35.7955569`).then((res)=>{
      setEstablishments(res.data);

      
    }).catch((err) => {
      console.log(err);
    });
  }


  
/*
  useEffect(() => {
    async function loadInicialPosition(){
      const { granted } = await requestPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })

        const { latitude, longitude } = coords

        setCurrentRegion({
          longitude,
          latitude,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014,
        })
      }
    }
    loadInicialPosition()
  }, [])
  
  if (!currentRegion){
    return null
  }
  */

  function handleNavigateToReservation(){
    navigation.navigate('Reservation')
  }

  function handleNavigateToGifts(){
    navigation.navigate('Gifts')
  }

  function handleNavigateToProfile(){
    navigation.navigate('Profile')
  }

  function handleRegionChanged(region: any) {
    setCurrentRegion(region);
  }

  return (
    <>
      <View style={styles.mapContainer}>
        <MapView 
          onRegionChangeComplete={getEstablishments}
          style={styles.map}
          initialRegion={{
            longitude: -35.7955569,
            latitude: -6.9796681,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014
          }} 
        >
        {establishments.map(establishment => (
          <Marker 
            onPress={() => {
              navigation.navigate('Detail', {
                  establishment
              })}}
            key={establishment.id}
            coordinate={{ 
              longitude: establishment.location.coordinates[0],
              latitude: establishment.location.coordinates[1], 
            }}
          >
            
          </Marker>
        ))}
        </MapView>
        <Hello>
          <TextHello>Olá João, Você tem 10 Amb-Coins</TextHello>
        </Hello>
      </View>
      <Busca>
        <BuscaText />
        <TouchableOpacity style={styles.SearchButton} onPress={getEstablishments}>
          <Ionicons style={styles.SearchIcon} name="ios-arrow-dropright" size={34} color="white" />
        </TouchableOpacity>
      </Busca>
      <View style={styles.RedBall}>
        <TouchableOpacity style={styles.VoiceIcon}>
          <MaterialIcons name="keyboard-voice" size={34} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ListFilter}>
        <FilterBox>
          <TouchableOpacity style={Filter.itens}>
            <Ionicons name="ios-beer" size={24} color="white" />
            <FilterButtonText>Bebida</FilterButtonText> 
          </TouchableOpacity>
        </FilterBox>
        <FilterBox>
          <TouchableOpacity style={Filter.itens}>
            <Ionicons name="ios-pricetags" size={24} color="white" />
            <FilterButtonText>Preço</FilterButtonText> 
          </TouchableOpacity>
        </FilterBox>
        <FilterBox>
        <TouchableOpacity style={Filter.itens}>
          <AntDesign name="heart" size={24} color="white" />
          <FilterButtonText>Atendimento</FilterButtonText> 
        </TouchableOpacity>
        </FilterBox>
        <FilterBox>
          <TouchableOpacity style={Filter.itens}>
            <MaterialCommunityIcons name="silverware-clean" size={24} color="white" />
            <FilterButtonText>Higiene</FilterButtonText> 
          </TouchableOpacity>
        </FilterBox>
      </ScrollView>
      <Container>
        <TouchableOpacity 
          style={Menu.itens}
          onPress={() => {}}
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
          onPress={handleNavigateToProfile}
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
  },

  map: {
    width: '100%',
    height: '100%',
    position: "absolute",
  },

  SearchIcon: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    width: 50
  },

  SearchButton: {
    backgroundColor: "#AA0D2B",
    paddingVertical: 7
  },

  RedBall: {
    backgroundColor: "#AA0D2B",
    height: 80,
    width: 80,
    borderRadius: 40,
    position: "absolute",
    bottom: 170,
    left: 170,
  },

  ListFilter: {
    height: 60,
    width: 500,
    position: "absolute",
    bottom: 90,
    flexDirection: "row",
  },
  
  VoiceIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  },

  callout: {
      width: 260
  },

  devName: {
      fontWeight: 'bold',
      fontSize: 16
  },

  devBio: {
      color: '#666',
      marginTop: 5
  },

  devTechs: {
      marginTop: 5
  },
})

export default Dashboard;