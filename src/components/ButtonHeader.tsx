import React from "react";
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const ButtomHeader = ({props}: any) => {
  const navigation = useNavigation();
  return(
    <View style={styles.contaniner}>

        <TouchableOpacity
          style={styles.search}
          onPress={() => navigation.navigate('SearchChats')}
        >
          <Icon2 name="search" size={24} />
        </TouchableOpacity>

        <TouchableOpacity
        >
          <Icon name="dots-three-vertical" size={21} />
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  contaniner: {
    flexDirection: 'row'
  },

  search: {
    marginRight: 10
  }
});

export default ButtomHeader;