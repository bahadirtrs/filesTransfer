import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Animated, StatusBar} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import TextButton from '../components/Buttons/TextButton';
import HelpButton from '../components/Buttons/HelpButton';
import NoConnected from '../components/Connected/NoConnected';
import color from '../constans/color';
const HomeScreen = ({navigation}) => {
  const [internet, setInternet] = useState(true);  
  useEffect(() => {
    NetInfo.fetch().then((data) => {
      if (data.isConnected) {
        setInternet(true);
      
      } else {
        setInternet(false);
      }
    });
}, []); 

 
  return (
    <View style={styles.container}>
         
      {internet ?
        <Animated.View style={styles.container}>
          <StatusBar hidden={false} barStyle="dark-content" backgroundColor={color.mainBackground} />
          <View style={{position:'absolute', top:0, right:150,width:100, height:100, backgroundColor:'#e1e1e150', borderRadius:10,  transform: [{ rotate: "45deg" }] }}></View>
          <View style={{position:'absolute', top:80, right:20,width:80, height:80, backgroundColor:'#e1e1e150',  borderRadius:10, transform: [{ rotate: "15deg" }] }}></View>
          <View style={{position:'absolute', top:70, right:300,width:90, height:90, backgroundColor:'#e1e1e150',  borderRadius:10, transform: [{ rotate: "55deg" }] }}></View>
          <Image source={require('../img/sd.png')} style={styles.Logo} />
          <Text style={styles.title}>Dosya Paylaşımcınız</Text>
          <Text style={styles.Description}>USB kablo zahmeti, kendimize attığımız mailler, sosyal medyaya yüklemeleri, hepsi geride kaldı.</Text>
          <TextButton homeUserPress={() => navigation.push('DosyaYukle', )} name="Dosya Yükle" />
          <TextButton homeUserPress={() => navigation.push('DosyaAl', {title:"Lütfen PIN Kodunu girin!"})} name="Dosya Al" />
          <HelpButton buttonPress={() => navigation.navigate('YardımAl',)} />
        </Animated.View>
       : <NoConnected/>
      }
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.mainBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Logo: {
    width: 200,
    height: 180,
  },

  title: {
    color:color.textColor,
    fontSize: 24,
    marginHorizontal: 20,
    marginTop: 20,
    padding:3,
    textAlign:'center',
    fontFamily:'GoogleSans-Bold'
  },

  Description: {
    fontSize: 12,
    color:color.textColor,
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
    fontFamily:'GoogleSans-Regular'
  },
});
