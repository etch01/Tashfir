import React from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet
} from "react-native";
var { width, height } = Dimensions.get("window");

const customInputs = props => (
  <View style={styles.input}>
    <TextInput 
    onChangeText={props.OCT}
    placeholderTextColor="#FFFFFF"
    secureTextEntry={props.STE}
    placeholder={props.PH}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    color: "#FFFFFF",
    width: "80%"
  },
});

export default customInputs;
