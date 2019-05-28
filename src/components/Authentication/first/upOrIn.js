import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButtons from "../fragments/buttons";
import * as Animatable from "react-native-animatable";

export default class UpOrIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="bounceIn" delay={1000}>
        <CustomButtons press={this.props.pressSignUp} title="Create Account" color="#fff" bgColor="gray" />

        </Animatable.View>
        <Animatable.View animation="bounceIn" delay={1200} style={styles.separator}>
          <View style={styles.line}/>
          <Text style={{marginLeft:'3%',marginRight:'3%'}}>Or</Text>
          <View style={styles.line}/>
        </Animatable.View>
        <Animatable.View animation="bounceIn" delay={1400}>
          <CustomButtons press={this.props.pressSignIn} title="Sign In" color="#fff" bgColor="#0074E3" />
          </Animatable.View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1,justifyContent:'center'},
  separator:{
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems: 'center',
      paddingLeft: "10%",
      paddingRight: "10%",
      marginTop: 20,
      marginBottom:20,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height:1,
    width:'44%'
  }
});
