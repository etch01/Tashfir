import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity, 
  ActivityIndicator,
} from "react-native";
import CustomInput from '../fragments/inputs';
import CustomButton from "../fragments/buttons";
import * as Animatable from 'react-native-animatable';
import firebase from "firebase";

var { width, height } = Dimensions.get("window");

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name:"",
      password: "",
      loading: false,
      errorMessage:null
    };
  }

  signUpHandler(email, password) {
    //checking if required fields are not empty !
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ loading: true });
      //Sign Up with Mail and password as parameters
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        //Adding user data to the current uid in database
        .then(() => {
          //getting today's date
          var today = new Date();var dd = today.getDate();var mm = today.getMonth() + 1; //January is 0!
          var yyyy = today.getFullYear();
          if (dd < 10) {
            dd = "0" + dd;
          }
          if (mm < 10) {
            mm = "0" + mm;
          }
          today = mm + "/" + dd + "/" + yyyy;
          //getting current user for the uid
          var user = firebase.auth().currentUser.uid;
          firebase
            .database()
            .ref("users/" + user)
            .set({
              name: this.state.name,
              email: this.state.email,
              isAdmin:false,
              dateCreated: today
            })
            .then(() => {
              this.setState({ loading: false });
              //this.props.navigation.navigate("Type");
            })
            .catch(() => alert("Failed"));
        })
        //Throwing error code
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            this.setState({
              errorMessage: "Password must be 8 characters or more.",
              loading: false
            });
          } else if (errorCode == "auth/email-already-in-use") {
            this.setState({ errorMessage: "Email already in use.",loading: false });
          } else if (errorCode == "auth/invalid-email") {
            this.setState({ errorMessage: "Invalid Email address.",loading: false });
          } else if (errorCode == "auth/operation-not-allowed") {
            this.setState({ errorMessage: "Email is not activated.",loading: false });
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    } else {
      //Trowing errors for required fields or password not match
      if (this.state.email == "" || this.state.password == "") {
        this.setState({ errorMessage: "Please fill the required fields!" });
      }
    }
  }

  render() {
    const {loading,errorMessage,email,password} = this.state;
    return (
      <Animatable.View animation="slideInUp" duration={200} style={styles.signInContainer}>
         <CustomInput
          PH="Full Name"
          OCT={val => this.setState({ name: val })}
          STE={false}
        />
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
        <Text style={{color:'red'}}>{errorMessage}</Text>
        <Animatable.View style={styles.loginButton} animation="bounceIn" delay={300}>
          <CustomButton press={()=>this.signUpHandler(email,password)} title={loading?null:"Sign Up"} color="black" bgColor="#FFFFFF"
          icon={loading?<ActivityIndicator/>:null}
          />
        </Animatable.View>
        <TouchableOpacity onPress={this.props.signInButton}>
          <Text style={{ color: "#FFFFFF" }}>Already have an account?</Text>
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
