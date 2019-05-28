import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const customButtons = props => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity 
    onPress={props.press}
    style={{
            width: "100%",
            backgroundColor: props.bgColor,
            alignItems: 'center',
            justifyContent:'center',
            borderRadius: 2,
            padding: 10,
            flexDirection:'row'
    }}>
      <Text style={{ color: props.color }}>{props.title}</Text>
      {props.icon}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    paddingLeft: "10%",
    paddingRight: "10%"
  },
});

export default customButtons;
