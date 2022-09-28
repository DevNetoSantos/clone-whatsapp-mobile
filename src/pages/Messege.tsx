import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, StatusBar } from 'react-native';
import React from 'react';
import ApiFake from '../config/ApiFake';
import ListItem from '../components/ListItem';
import {
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";


const SendMessege = ({navigation}: any) => {

  return(
    <View style={styles.container}>
      <FlatList 
        data={ApiFake}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
      />
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
  },

  list: {
    flex: 1,
  },
});

export default SendMessege;