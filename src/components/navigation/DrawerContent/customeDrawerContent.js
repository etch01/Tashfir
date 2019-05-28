import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import firebase from 'firebase';
import { DrawerActions } from 'react-navigation-drawer';
const signOut=(action)=>{

}

const drawerContent = (props) => (
    <View style={styles.drawerContainer}>
                  <TouchableOpacity onPress={()=>props.navigation.dispatch(DrawerActions.closeDrawer())}>
            <Icon name="menu" size={30} style={{padding:'5%'}} color="black"/>
          </TouchableOpacity>
        <View style={styles.imageContainer}>
            <Image style={styles.icon} source={require('../../../../assets/icon.png')}/>
        </View>
        <View style={styles.buttonsContainer}>
            <View syle={{flex:1,paddingTop: 40,backgroundColor:'red'}}>
            <TouchableOpacity style={{flexDirection:'row',padding:20}}>
            <Icon name="map" size={32} color="#146BCB"/>
            <Text style={styles.txt}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{signOut(props.navigation.navigate('Auth'))}} style={{flexDirection:'row',padding:20}}>
            <Icon name="log-out"  size={32} color="#146BCB"/>
            <Text style={styles.txt}>Logout</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    drawerContainer:{
        flex:1
    },
    imageContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonsContainer:{
        flex:1,
        alignItems: 'center',
        paddingTop: '5%',
    },
    txt:{
        color:'#146BCB',
        fontWeight: 'bold',
        fontSize:20,
        marginLeft: 10,
    }
});

export default drawerContent;
