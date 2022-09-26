import {
  View,
  Text,
  StyleSheet
} from "react-native";

const Header = () => {
  return(
    <View style={styles.container}>

      <Text style={styles.title}>Whatsapp</Text>
      <View style={styles.containerItems}>
        <Text>...</Text>
        <Text>...</Text>
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
  }
});

export default Header;