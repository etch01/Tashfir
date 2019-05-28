import { Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import MapParent from '../map/rnaMaps';
import CustomDrawerContentComponent from './DrawerContent/customeDrawerContent';
import Auth from '../Authentication/mainAuthScreen';
const { width } = Dimensions.get("window");

const DrawerNavigation = createDrawerNavigator(
  {
    MapParent: {
      screen: MapParent,
      navigationOptions: {
        drawerLabel: () => null
      }
    },
  },

  {
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: "right",
    drawerWidth: width * 0.7
  }
);

const drawerContainer = createAppContainer(DrawerNavigation);
export default drawerContainer;
