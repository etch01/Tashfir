import React, { Component } from "react";
import {
  View,
  Dimensions,
} from "react-native";
const { height, width } = Dimensions.get("window");
import First from "./first/upOrIn";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import * as Animatable from "react-native-animatable";
import firebase from 'firebase';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "First",
      upperAreaFlexSize: 2,
      imageSize: 2,
      loginSlide:"slideInUp"
    };
  }
  
  componentWillMount = () => {
    this.setState({ loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        alert('hello again')
        this.props.navigation.navigate("Maps");
        //console.log(user.providerData);
        this.setState({ loading: false });
      } else {
        this.setState({ loading: false });
      }
    });
  };

  render() {
    const { currentScreen, upperAreaFlexSize, imageSize,loginSlide } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: upperAreaFlexSize
          }}
        >
          <Animatable.View animation={"zoomIn"} delay={200} duration={1200}>
            <Animatable.Image
              animation={"bounceIn"}
              delay={700}
              duration={1200}
              style={{
                flex: 1,
                aspectRatio: 1.5,
                maxHeight: height / imageSize,
                resizeMode: "contain"
              }}
              ref={imageRef => (this.imageRef = imageRef)}
              source={require("../../../assets/icon.png")}
            />
          </Animatable.View>
        </View>
        <View
          // animation={"zoomIn"}
          // delay={700}
          // duration={400}
          style={{
            flex: 1
          }}
        >
          {//Check for the current screen
          currentScreen == "First" ? (
            <First
              pressSignUp={() => {
                this.setState({
                  currentScreen: "SignUp",
                  upperAreaFlexSize: 0.5,
                  imageSize: 4
                });
                this.imageRef.bounceIn();
              }}
              pressSignIn={() => {
                this.setState({
                  currentScreen: "SignIn",
                  upperAreaFlexSize: 1,
                  imageSize: 3
                });
                this.imageRef.bounceIn();
              }}
              width={width / 2}
            />
          ) : currentScreen == "SignIn" ? (
            <SignIn slide={loginSlide}
            navigate={this.props.navigation.navigate} 
            destination="Maps"
            notRegistered={() => {
              this.setState({
                currentScreen: "SignUp",
                upperAreaFlexSize: 0.5,
                imageSize: 4
                //loginSlide:"slideInDown"
              });
              this.imageRef.bounceIn();
            }}
            />
          ) : (
            <SignUp
              signInButton={() => {
                this.setState({
                  currentScreen: "SignIn",
                  upperAreaFlexSize: 1,
                  imageSize: 3,
                  loginSlide:"slideInDown"
                });
                this.imageRef.bounceIn();
              }}
            />
          )}
        </View>
      </View>
    );
  }
}

