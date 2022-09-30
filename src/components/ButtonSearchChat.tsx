import React from "react";
import {
  View,
  StyleSheet,
  TextInput
} from "react-native";

const ButtonSearchChat = ({porps}: any) => {
  return(
    <View style={Styles.container}>
      <TextInput 
        style={Styles.search}
        placeholder={'Search...'}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {

  },
  search: {
    width: 310
  }
});

export default ButtonSearchChat;