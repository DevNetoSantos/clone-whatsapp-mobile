import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";

const Phone = ({navigation}: any) => {
  const user = useSelector((state: RootState) => state.user);

  return(
    <View style={styles.container}>

      <Text>{user.name}</Text>
      
      <TouchableOpacity
        style={styles.buttonPhone}
        onPress={() => navigation.navigate('SelectContactCall')}
      >
        <Icon name='phone-remove' size={24} color='#FFF'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  buttonPhone: {
    backgroundColor: '#128C7E',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 10
  }
});

export default Phone;