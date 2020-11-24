import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {WebView} from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextButton from '../components/Buttons/TextButton';
import HelpButton from '../components/Buttons/HelpButton';
import color from '../constans/color';

function Download({route,navigation}) {
  const {pin} = route.params;
  return (
    <View style={styles.container}>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',textAlign: 'center', }}>
        <View style={{height:10, }} >
          <WebView source={{uri:'http://bahadirtiras.com.tr/zzz/client-end-mobile.php?pin='+ pin}}/>
        </View>
        <FontAwesome5 name={'cloud-download-alt'} size={110} color={color.mainBackColor} />
          <Text style={styles.url}>Dosyanız indiriliyor...</Text>
          <Text style={styles.urlDes}>Dosya Paylaşımcınızın gelişimine katkı sağlamak için kısa bir reklam izlemenizi rica ederiz.</Text>
          <TextButton  name="Reklam İzle" />
          <TouchableOpacity onPress={() => navigation.replace('Download', {pin:pin} )}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.bottom}>Dosyan indirme başarısız mı oldu?</Text>
                <Text style={styles.learn}>Tekrar indirmeyi Dene</Text>
              </View>
        </TouchableOpacity>
        </View>
    </View>
  );
}
export default Download;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor:color.mainBackground,
  },

  title: {
    color:color.textColor,
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 20,
    marginTop: 100,
  },

  bottom: {
    fontSize: 12,
    paddingTop: 50,
    marginTop: 0,
    textAlign: 'center',
    color: color.textColor,
    fontFamily: 'Volte',
  },

  learn: {
    fontSize: 12,
    fontFamily: 'Volte-Bold',
    color: color.textColor,
  },


  url: {
    color: color.textColor,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 20,
    marginTop: 30,
    textAlign:'center'
  },

  urlDes: {
    color: color.textColor,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal:30,
    textAlign:'center',
    marginBottom:20,
  },

  text: {
    color: color.textColor,
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
