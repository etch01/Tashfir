import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { Markers } from "../../../data/Markers";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const allMarkers = Markers.map((element, index) => {
      return (
        <MapView.Marker
          description={element.description}
          title={element.title}
          image={{ uri: element.image }}
          key={index}
          pinColor="#8B0000"
          coordinate={element.coordinate}
        />
      );
    });
    const renderMap =()=>{
        return (
            <View style={{ flex: 1 }}>
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: this.state.location.coords.latitude,
                  longitude: this.state.location.coords.longitude,
                  latitudeDelta: 0.0043,
                  longitudeDelta: 0.0034
                }}
              >
                {allMarkers}
              </MapView>
            </View>
          );
    }
    return(
        {renderMap()}
    )

  }
}
