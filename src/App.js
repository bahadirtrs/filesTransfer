import React, {useEffect, useState} from 'react';
import {StatusBar, Image, Text,View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Upload from './sceens/Upload';

import Splash from './sceens/Splash';
import HomeScreen from './sceens/HomeScreen';
import FileUpload from './sceens/FileUpload';
import FileDownload from './sceens/FileDownload';
import FileDescription from './sceens/FileDescription';
import FileInfo from './sceens/FileInfo';
import Web from './sceens/Web';
import DeleteFile from './sceens/DeleteFile';
import Download from './sceens/Download';
import Help from './sceens/Help';
import OnLoginScreen from './sceens/OnLoginScreen';
import AsyncStorage from '@react-native-community/async-storage'
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={{flex: 1, flexDirection:'row',justifyContent: 'space-between', alignItems: 'center', padding:20, marginBottom:0}}>
    <Text> </Text>
     <Text style={{fontSize: 18,  color: '#555555',  fontFamily: 'Poppins-Medium',}} >Dosya Yükle</Text>
     <Text></Text>
   	<TouchableOpacity>
         <FontAwesome5 name={'globe-americas'} size={25} color='#555555' />
   	</TouchableOpacity>
  </View>
  );
}

function DownloandLogoTitle() {
  return (
    <View style={{flex: 1, flexDirection:'row',justifyContent: 'space-between', alignItems: 'center', padding:20, marginBottom:0}}>
     <Text> </Text>
     <Text style={{fontSize: 18,  color: '#555555',  fontFamily: 'Poppins-Medium',}} > Dosya İndir</Text>
     <Text> </Text>
   	<TouchableOpacity>
      	   <FontAwesome5 name={'globe-americas'} size={25} color='#555555' />
   	</TouchableOpacity>
   </View>
  );
}


export default function App() {
  const [isFirstLauncher, setIsFirstLauncher]= useState(null);


  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value =>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLauncher(true);
      } else {
        setIsFirstLauncher(false)
      }
    });
  }, []);



  if(isFirstLauncher=== null){
    return null;
  } else if( isFirstLauncher=== true ){
    return (
      <NavigationContainer>
      <StatusBar hidden={true} barStyle="dark-content" backgroundColor="#f1f1f1" />
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
       <Stack.Screen name="OnLoginScreen" component={OnLoginScreen} />
       <Stack.Screen options={{headerShown: false}}  name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown: false}}  name="AnaSayfa" component={HomeScreen} />
        <Stack.Screen name="DosyaAl"   component={FileDownload} />
        <Stack.Screen name="DosyaYukle" component={FileUpload} />
        <Stack.Screen name="DosyaDetay" component={FileDescription} />
        <Stack.Screen name="DosyaPinAl" component={FileInfo} />
        <Stack.Screen name="YardımAl" component={Help} />
        <Stack.Screen name="WebSitesi" component={Web} />
        <Stack.Screen options={{ headerTitle: props => <DownloandLogoTitle {...props} /> }} name="DeleteFile" component={DeleteFile} />
        <Stack.Screen options={{ headerTitle: props => <DownloandLogoTitle {...props} /> }} name="Download" component={Download} />  
      </Stack.Navigator>
    </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator  screenOptions={{headerShown: true}}  initialRouteName="HomeScreen">                
        <Stack.Screen options={{headerShown: false}}  name="Splash" component={Splash} />
          <Stack.Screen options={{headerShown: false, }}  name="AnaSayfa" component={HomeScreen} />
          <Stack.Screen options={{ headerTitle: props => <DownloandLogoTitle {...props} /> }} name="DosyaAl" component={FileDownload} />
          <Stack.Screen options={{ headerTitle: props => <LogoTitle {...props} /> }} name="DosyaYukle" component={FileUpload} />
          <Stack.Screen options={{ headerTitle: props => <DownloandLogoTitle {...props} /> }} name="DosyaDetay" component={FileDescription} />
          <Stack.Screen options={{ headerTitle: props => <LogoTitle {...props} /> }} name="DosyaPinAl" component={FileInfo} />
          <Stack.Screen options={{ headerTitle: props => <LogoTitle {...props} /> }} name="YardımAl" component={Help} />
          <Stack.Screen options={{ headerTitle: props => <LogoTitle {...props} /> }} name="WebSitesi" component={Web} />
          <Stack.Screen options={{ headerTitle: props => <DownloandLogoTitle {...props} /> }} name="DeleteFile" component={DeleteFile} />
          <Stack.Screen options={{ headerTitle: props => <DownloandLogoTitle {...props} /> }} name="Download" component={Download} />    
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
