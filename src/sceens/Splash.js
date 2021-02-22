import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Animated, StatusBar} from 'react-native';
import color from '../constans/color';

const Splash = ({navigation}) => {
    const butonSize = useRef(new Animated.Value(1)).current;
     handlePress = () =>{
        Animated.sequence([
            Animated.spring( butonSize, {
                useNativeDriver: true,
                toValue:0.85,
                duration:200
            }),
            Animated.spring( butonSize, {
                useNativeDriver: true,
                toValue:1
            }),  
            
        ]).start();
    }
    useEffect(() => {
      handlePress()
      setTimeout(() => {
        navigation.replace('AnaSayfa', )
        }, 2000);

    }, []);

 

    const sizeStyle ={
        transform: [{scale: butonSize}]
    }
    return (
      
      <View style={styles.container} >
          <StatusBar hidden={false} barStyle="dark-content" backgroundColor={color.mainBackColor} />
           <Animated.View style={[styles.hexContainer, sizeStyle]}>
                <Image source={require('../img/file.png')} style={styles.Logo} />
                <Text style={{  fontSize:15, paddingTop:10, color:'#fff'}}> Dosya Paylaşımcınız</Text>
                <Text style={{  fontSize:10, paddingTop:10, color:'#fff'}}> Powered by bhdrtrs</Text>
        </Animated.View>
      </View>
   
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.mainBackColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexContainer:{
    height:200,
    width:300,
    justifyContent:'center', 
    alignItems:'center',
    padding:10,
    textAlign:'center',
    
  },

  Logo: {
    width: 80,
    height: 80,
    marginLeft:5,
  },

  title: {
    color: '#4d4d4d',
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 20,
    padding:3,
  },

  Description: {
    fontSize: 12,
    color: '#4d4d4d',
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
