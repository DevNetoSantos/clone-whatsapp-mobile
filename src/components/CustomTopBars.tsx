import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const CustomTopBars = ({ state, descriptors, navigation, }: any) => {
  return(
    <View style={styles.container}>
        {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const handlerButtonPress = () => {
          navigation.navigate(route.name)
        }

        return (
          <TouchableOpacity
            style={styles.tapBars}
            key={index}
            onPress={handlerButtonPress}
          >
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  tapBars: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  }
});

export default CustomTopBars;