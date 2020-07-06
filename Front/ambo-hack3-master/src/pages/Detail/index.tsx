import React, { useEffect, useState } from 'react';
import { Platform, Button } from 'react-native'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import DateTimePicker from '@react-native-community/datetimepicker';

import userToken from '../../mocks/auth';

interface Establishment {
  _id: string;
  name: string;
  avatar_url: string;
  description: string;
  phoneNumber: string;
  email: string;
}

interface Params {
  establishment: Establishment;
}

const Detail: React.FC = () => {
  const [establishment, setEstablishment] = useState<Establishment>({} as Establishment);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;


  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  

  async function handleRequestReservation(){
    
    api.post('/users/reservations', {date, establishment_id: establishment._id});

    //TODO mandar token de autenticação
     
    alert(`Reserva solicitada com sucesso no bar ${establishment.name}`);
  }



  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
  };

  function handleNavigateBack() {
    navigation.goBack();
  }

  // function handleWhatsapp() {
  //   Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Gostaria de falar sobre minha reserva.`);
  // }

  useEffect(()=>{
    setEstablishment(routeParams.establishment);
    console.log(establishment.avatar_url);
  },[]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f4f5" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#AA0D2B" />
        </TouchableOpacity>

        <Image style={styles.pointImage} source={{ uri: establishment.avatar_url }} />
      
        <Text style={styles.pointName}>{establishment.name}</Text>
  

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Email</Text>
          <Text style={styles.addressContent}>{establishment.email}</Text>
        </View>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Telefone</Text>
          <Text style={styles.addressContent}>{establishment.phoneNumber}</Text>
        </View>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Descrição</Text>
          <Text style={styles.addressContent}>{establishment.description}</Text>
        </View>
        <View>
      <View style={{marginHorizontal: 50, marginVertical: 20}}>
      <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleRequestReservation}>
          <Text style={styles.buttonText}>Fazer Reserva</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
    backgroundColor: "#f4f4f5"
  },

  pointImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#AA0D2B',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },
  
  addressTitle: {
    color: '#AA0D2B',
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#f4f4f5"
  },
  
  button: {
    width: '48%',
    backgroundColor: '#AA0D2B',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    
  },
});

export default Detail;