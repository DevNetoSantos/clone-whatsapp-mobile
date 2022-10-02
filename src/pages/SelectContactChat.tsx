import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

const SelectContactChat = () => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButton}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Home')}    
          >
            <Icon name='arrow-back' size={24} color='#999'/>
          </TouchableOpacity>
          <View style={styles.headerButton2}>
            <Text>Select Contact</Text>
            <Text>128 contacts</Text>
          </View>
        </View>
        <View style={styles.headerSearch}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  },
  header: {
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  headerButton: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center'
  },
  headerSearch: {

  },
  headerButton2: {
    marginLeft: 25
  }
});

export default SelectContactChat;