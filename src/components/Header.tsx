import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const Header = () => {
  return(
    <View style={styles.container}>

      <Text style={styles.title}>Whatsapp</Text>
      <View style={styles.containerItems}>
        
        <TouchableOpacity
          style={styles.search}
        >
          <Icon name="search1" size={24} />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.menu}
        >
          <Icon name="ellipsis1" size={24} />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 20,
  },

  containerItems: {
    flexDirection: 'row'
  },

  search: {
    marginRight: 10,
  },

  menu: {

  }
});

export default Header;