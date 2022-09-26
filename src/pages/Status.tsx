import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const Status = () => {
  return(
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.buttonPincel}
      >
        <Icon2 name='pencil' size={24} color='#999'/>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.buttonCamera}
      >
        <Icon name='camera' size={24} color='#FFF'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  buttonCamera: {
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

  buttonPincel: {
    backgroundColor: '#DCF8C6',
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    right: 18
  }
});

export default Status;