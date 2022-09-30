import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from '../components/ListItem';
import { useNavigation } from "@react-navigation/native";
import results from '../config/ApiFake'
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const SearchChats = () => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);
  const navigation = useNavigation();

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  return(
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.navigate('Home')}
          
        >
          <Icon name='arrow-back' size={24} color='#999'/>
        </TouchableOpacity>
      <TextInput 
        style={styles.search}
        placeholder={'Search...'}
        value={searchText}
        onChangeText={(t) => setSearchText(t)}
      />
      </View>
      <FlatList 
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  list: {
    flex: 1,
    marginTop: 10
  },
  search: {
    width: 320,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  buttonBack: {
    marginLeft: 25,
    marginRight: 10
  }
});

export default SearchChats;