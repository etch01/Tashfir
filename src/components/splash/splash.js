import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Splash extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Auth');
        }, 3000);
    }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/icon.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: "50%",
    height: "30%"
  }
});
