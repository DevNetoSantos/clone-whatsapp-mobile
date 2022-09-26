import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const Chats = () => {
  return(
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.buttonMessage}
      >
        <Icon name='android-messages' size={24}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonMessage: {
    backgroundColor: '#25D366',
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

export default Chats;