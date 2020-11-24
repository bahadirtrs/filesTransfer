import React from 'react';
import {StyleSheet, StatusBar, View, Text, Image} from 'react-native';
import color from '../constans/color';

import Menu from './Menu';
function Web({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',textAlign: 'center', }}>
        <Image source={require('../img/1.png')} style={styles.Logo} />
        <Text style={styles.url}>www.dosyaci.com</Text>
        <Text style={styles.urlDes}> Web adresinden dosyalarınıza erişebilirsiniz.</Text>
      </View>
      <Menu homeScreenPress={() => {navigation.navigate('AnaSayfa');}}
        searchScreenPress={() => {navigation.navigate('AnaSayfa');}}
        fileUploadPress={() => {navigation.navigate('DosyaYukle');}}
        webScreenPress={() => {navigation.navigate('WebSitesi');}}
        helpScreenPress={() => {navigation.navigate('YardımAl');}}
        oneIconName="house-user"
        twoIconName="search"
        thirdIconName="upload"
        forIconName="globe-americas"
        fiveIconName="info-circle"
        oneIconColor={color.textColor}
        twoIconColor={color.textColor}
        thirdIconColor={color.mainColor}
        forIconColor={color.textColor}
        fiveIconColor={color.textColor}
      />
    </View>
  );
}
export default Web;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor:color.mainBackground,
  },


  url: {
    color:color.mainBackColor,
    fontSize: 25,
    fontFamily: 'Poppins-ExtraBold',
    marginHorizontal: 20,
    marginTop: 50,
  },

  urlDes: {
    color:color.mainBackColor,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  text: {
    color: '#555',
    fontSize: 16,
    fontFamily: 'Poppins-ExtraBold',
    margin: 60,
    marginTop: 20,
    textAlign: 'center',
  },

  Logo: {
    padding: 50,
    height: 260,
    width: 350,
  },
});
