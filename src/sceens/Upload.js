import React from 'react';
import {StyleSheet, StatusBar, View, Text, Image,Dimensions,ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import color from '../constans/color';
import TextButton from '../components/Buttons/TextButton';
import HelpButton from '../components/Buttons/HelpButton';

function Upload({navigation}) {
  const LoadingIndicatorView = () => {
    return <ActivityIndicator color={color.mainBackColor} size="large" />;
  };


  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor={color.mainBackground}/>
      <Text style={{ fontFamily:'Poppins-Bold'   , color: '#505050', fontSize:24, paddingTop:80, paddingLeft:20 }} >Thank You!</Text>  
      <Text style={{ fontFamily:'Poppins-Regular', color: '#505050', fontSize:14, paddingTop:5,  paddingLeft:20 }} >Thank you for registering with Company. Please complete your registration and be activated by visiting our office.</Text>      
      <Image source={require('../img/bise.png')} style={styles.Logo} />
    </View>
  );
}
export default Upload;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'flex-start', 
    textAlign: 'center',
    backgroundColor:color.mainBackground,
  },


});
