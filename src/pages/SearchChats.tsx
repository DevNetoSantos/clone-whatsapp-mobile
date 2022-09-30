import React from "react";
import ApiFake from '../config/ApiFake';
import ListItem from '../components/ListItem';
import {
  FlatList,
  StyleSheet,
  View
} from "react-native";

const SearchChats = () => {
  return(
    <View style={styles.container}>
      <FlatList 
        data={ApiFake}
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
    flex: 1
  },
});

export default SearchChats;