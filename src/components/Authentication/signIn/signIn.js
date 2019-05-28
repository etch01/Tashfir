import React, { Component } from "react";
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity, 
} from "react-native";
import CustomInput from '../fragments/inputs';
import CustomButton from "../fragments/buttons";
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase';

var { width, height } = Dimensions.get("window");

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      errorMessage:null
    };
  }


  //sign in function
  signInHandler=(email, password)=> {
    try {
      if (this.state.email !== "" || this.state.password !== "") {
        this.setState({ loading: true });
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(data => {
            this.setState({ loading: false });
            this.props.navigate(this.props.destination)
          })
          .catch(error => {
            var err = error.code;
            if (err == "auth/user-disabled") {
              this.setState({errorMessage:"User has been banned."});
            } else if (err == "auth/invalid-email") {
              this.setState({errorMessage:"email is not correct."});
            } else if (err == "auth/user-not-found") {
              this.setState({errorMessage:"Email address doesn't exist."});
            } else if (err == "auth/wrong-password") {
              this.setState({errorMessage:"Incorrect password."});
            }
            this.setState({ loading: false });
          });
      } else {
        this.setState({errorMessage:"Email or password cannot be empty."})
      }
    } catch (error) {
      if(error.code){
        this.setState({errorMessage:error.code})
      }else{
        this.setState({errorMessage:error})
      }
    }
  }

  render() {
    return (
      <Animatable.View animation={this.props.slide} duration={200} style={styles.signInContainer}>
        <CustomInput
          PH="Email"
          OCT={val => this.setState({ email: val })}
          STE={false}
        />
        <CustomInput
          PH="Password"
          OCT={val => this.setState({ password: val })}
          STE={true}
        />
        <Text style={{color:'red'}}>{this.state.errorMessage}</Text>
        <Animatable.View style={styles.loginButton} animation="bounceIn" delay={300}>
          <CustomButton press={()=>this.signInHandler(this.state.email,this.state.password)} 
          icon={this.state.loading?<ActivityIndicator/>:null}
          title={this.state.loading?null:"Log in"} color="black" bgColor="#FFFFFF" />
        </Animatable.View>
        <TouchableOpacity onPress={this.props.notRegistered}>
          <Text style={{ color: "#FFFFFF" }}>Not Registered yet?</Text>
        </TouchableOpacity>
      </Animatable.View >
    );
  }
}
const styles = StyleSheet.create({
  signInContainer: {
    flex: 4,
    backgroundColor: "#166CCD",
    alignItems: "center",
    justifyContent: "space-around"
  },
  input: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    color: "#FFFFFF",
    width: "80%"
  },
  loginButton:{
    width:width,
  }
});
