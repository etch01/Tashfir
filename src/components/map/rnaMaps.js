import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Map from "./mapView/mapView";
import {Markers} from '../../data/Markers';
import StarRating from "react-native-star-rating";
import Icon from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get("window");

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*<Map style={{flex:1}}/> this View is a replacement for map*/}
        <View
        style={{flex:1,backgroundColor:'green'}}
          // initialRegion={{
          //   latitude: 37.78825,
          //   longitude: -122.4324,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421
          // }}
        >
          <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
            <Icon name="menu" size={30} style={{padding:'5%'}} color="black"/>
          </TouchableOpacity>
          </View>
        <Swiper style={styles.swiper} horizontal
        containerStyle={{backgroundColor:'green'
        
      }}
        >
          {
            Markers.map((element,index)=>{
              return(
                <View key={index} style={styles.card} >
                <View style={styles.head}>
                    <Image style={styles.brandIcon} source={{uri:element.image}}/>
                    <View style={{flex:1,marginLeft:'1%'}}>
                      <View style={styles.brandnameAndCloseOrOpen}>
                        <Text style={styles.brandName}>{element.title}</Text>
                        {!element.open?<View style={styles.close}>
                            <Icon name="dot-single" size={32} color="#DE324A"/>
                            <Text style={{color:'#ffffff',marginLeft:'5%'}}>Close</Text>
                        </View>:<View style={styles.open}>
                            <Icon name="dot-single" size={32} color="#5DA400"/>
                            <Text style={{color:'#ffffff',marginLeft:'5%'}}>open</Text>
                        </View>}
                      </View>
                      <Text>{element.description}</Text>
                </View>
        </View>
            <View style={styles.footer}>
                <View>
                  <Text>Rating</Text>
                  <StarRating
                      starSize={16}
                      disabled={false}
                      fullStarColor="gold"
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      maxStars={5}
                      rating={element.rating}
                      //selectedStar={rating => this.onStarRatingPress(rating)}
                    />
                </View>
                <View>
                <Text>Start From</Text>
                <Text style={{fontWeight:'bold',color:'#959595'}}>$$$</Text>
                </View>
                <View>
                <Text>Distance</Text>
                <Text style={{fontWeight:'bold',color:'#959595'}}>7KM</Text>
                </View>
            </View>
        </View>
              );
            })
          }
        </Swiper>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  swiper:{
  },
  card:{
    flex:1,
    backgroundColor:'#ffffff',
    width:'90%',
    borderRadius: 20,
    alignItems:'center',
    marginLeft:'5%',
  },
  head:{
    flexDirection:'row',
    alignItems: 'center',
    flex:1,
    borderBottomWidth: 1,
    borderBottomColor:'#C8C8C8',
    width:'90%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  brandIcon:{
    width:80,
    height:80,
    borderRadius:40
  },
  close:{
    backgroundColor:'#F26D82',
    padding: 8,
    borderRadius:10,
    flexDirection:'row',
    alignItems: 'center',
  },
  open:{
    backgroundColor:'#7DD300',
    padding: 8,
    borderRadius:10,
    flexDirection:'row',
    alignItems: 'center',
  },
  brandName:{
    fontSize:16,
    color:"#C8C8C8"
  },
  brandnameAndCloseOrOpen:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'
  },
  footer:{
    flex:1,
    width:'90%',
    flexDirection:"row",
    padding:'5%',
    justifyContent:'space-around'
  }
})