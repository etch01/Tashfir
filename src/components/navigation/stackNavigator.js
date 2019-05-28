import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from '../splash/splash';
import Auth from '../Authentication/mainAuthScreen';
import Maps from './DrawerNavigator';

const StackNav = createStackNavigator(
  {
    Splash: { screen: Splash },
    Auth:{screen:Auth},
    Maps:{
      screen:Maps,
      navigationOptions: {
        headerLeft: null,
        gesturesEnabled: false
      }
    },
  },
  {
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createAppContainer(StackNav);
