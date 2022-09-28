import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";


const SendMessege = ({navigation}: any) => {

  return(
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      
      <TouchableOpacity
        style={styles.buttonMessage}
        onPress={() => navigation.navigate('SelectContactChat')}
      >
        <Icon name='android-messages' size={24} color='#FFF'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  buttonMessage: {
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

export default SendMessege;