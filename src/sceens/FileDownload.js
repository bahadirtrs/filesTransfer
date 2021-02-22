import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';
import {TextInput, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import NetInfo from '@react-native-community/netinfo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Menu from './Menu';
import TextButton from '../components/Buttons/TextButton';
import HelpButton from '../components/Buttons/HelpButton';
import NoConnected from '../components/Connected/NoConnected';
import color from '../constans/color';

const FileDownload = ({route, navigation}) => {
  const [value, onChangeText] = useState('Pin kodunu giriniz...');
  const [internet, setInternet] = useState(true);
  const [pin, setPin] = useState('Lütfen PIN kodunu gir!');  
  const [pinDes, setPinDes] = useState('İndirme işlemi yaptıktan sonra dosyanı sistemden tüm kalıntılarıyla birlikte temizlemeyi unutma!');  
  const [data, setData] = useState([]);
  const [redirect, setRedirect] = useState(1);
  const [icon, setIcon] = useState(1);
  let textInput= useRef(null)
  const lengthInput=5;
  const [internalVal, setInternalVal]=useState("")

  useEffect(() => {
    //textInput.focus()
  }, [])

  useEffect(() => {
    setIcon(1);
    setPin('Lütfen PIN Kodunu girin!')
    setPinDes('İndirme işlemi yaptıktan sonra dosyanı sistemden tüm kalıntılarıyla birlikte temizlemeyi unutma!')
  }, [internalVal]);

  useEffect(() => {
    NetInfo.fetch().then((data) => {
      if (data.isConnected) {
        setInternet(true);
      }else{
        setInternet(false);
      }
    });
  }, []);

  useEffect(() => {
    Redirect();
  }, [redirect]);


  const Listele = async () => {
    try {
      const response = await fetch('http://bahadirtiras.com.tr/react/listeler.php?pin=' + internalVal, );
      const responseJson = await response.json();
      setData(responseJson);
      setRedirect(redirect+1);
    } catch (error) {
      console.error(error);
      
    }
  };

  const Redirect = () => {
    if (data[0]) {
      if (data[0].pin === internalVal) {        
        navigation.push('DosyaDetay', {pin: internalVal});
      } else {
        setIcon(0);
        setPin("PIN Kodu Bulunamadı!")
        setPinDes('Kayıtlarımızda bu PIN Koduna ait hiç bir dosyaya rastlayamadık. Lütfen PIN Kodunuzu kontrol edin')
           
      }
    }
  };
  return (
  <View style={styles.container}>   
    <StatusBar hidden={false} barStyle="dark-content" backgroundColor={color.mainBackground}/>   
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', width:'100%', paddingVertical:20, paddingHorizontal:30}} >
        <FontAwesome5 name={'bars'} size={25} color={color.mainBackColor} />
        <FontAwesome5 name={'shield-alt'} size={25} color={color.mainBackColor} />
      </View>
      {internet ? 
        <>
      <View style={styles.uploadContainer}>
            <View style={{position:'absolute', top:0, right:150,width:100, height:100, backgroundColor:'#e1e1e150', borderRadius:10,  transform: [{ rotate: "45deg" }] }}></View>
            <View style={{position:'absolute', top:150, right:100,width:50, height:50, backgroundColor:'#e1e1e150',  borderRadius:5,  transform: [{ rotate: "60deg" }] }}></View>
            <View style={{position:'absolute', top:80, right:20,width:80, height:80, backgroundColor:'#e1e1e150',  borderRadius:10, transform: [{ rotate: "15deg" }] }}></View>
            <View style={{position:'absolute', top:150, right:255,width:60, height:60, backgroundColor:'#e1e1e150',  borderRadius:5, transform: [{ rotate: "75deg" }] }}></View>
            <View style={{position:'absolute', top:70, right:300,width:90, height:90, backgroundColor:'#e1e1e150',  borderRadius:10, transform: [{ rotate: "55deg" }] }}></View>
      <View style={{justifyContent:'center', alignItems:'center', bottom:-30}} >
             {icon ? <FontAwesome5 name={'unlock-alt'} size={110} color={color.mainBackColor} />
             : <FontAwesome5 name={'eye-slash'} size={110} color={color.mainBackColor} /> }
            <Text style={styles.pin}>{pin}</Text>
            </View>  
        <View style={{justifyContent:'flex-start', alignItems:'flex-start'}} >
          <TextInput
            ref={(input)=>textInput=input}
            onChangeText={text => setInternalVal(text)}
            style={{width:300,height:50, zIndex:3, top:58, fontSize:1, color:'#1181b201'}}
            value={internalVal}
            maxLength={lengthInput}
            hidden={false}
            keyboardType="numeric"
            selectionColor={'#1181b201'}
            />
        </View>
        <View onPress={()=>textInput.focus()} style={{zIndex:0,flexDirection:'row', justifyContent:'center', textAlign:'center'}} >
          { 
          Array(lengthInput).fill().map((data,index) => (
              <View 
                onPress={()=>textInput.focus()}
                key={index} 
                style={{
                  paddingVertical:10,  width:50, margin:5, justifyContent:'center', alignItems:'center', borderWidth:1.5, borderRadius:9, backgroundColor:'#fff',
                  borderColor: index+1===internalVal.length ? color.mainBackColor : '#bbb'
                }}>
                <Text 
                  style={{fontSize:24, fontFamily:'GoogleSans-Regular',  textAlign:'center', color:'#000'}} onPress={()=>textInput.focus()}>
                  {internalVal && internalVal>0 ? internalVal[index]:""}
              </Text>
            </View>
            ))
          }
        </View>
            <Text style={styles.infoText}>{pinDes}</Text>
            <TextButton homeUserPress={Listele} name="Dosyaya Git"/>
            <HelpButton buttonPress={() => navigation.navigate('OnLoginScreen',)} />
      </View>
          <Menu
            homeScreenPress=  {() => {navigation.navigate('AnaSayfa');}}
            searchScreenPress={() => {navigation.navigate('AnaSayfa'); }}
            fileUploadPress=  {() => {navigation.navigate('DosyaYukle'); }}
            webScreenPress=   {() => {navigation.navigate('WebSitesi'); }}
            helpScreenPress=  {() => {navigation.navigate('OnLoginScreen');}}
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
        </>
      : <NoConnected/>
      }
  </View>
  );
};

export default FileDownload;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:color.mainBackground,
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  uploadContainer: {
    backgroundColor:color.mainBackground,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  Iconimages:{
    height: 150,
    width: 150,
  },

  pin: {
    fontSize: 20,
    marginTop: 30,
    color:color.textColor,
    fontFamily:'GoogleSans-Bold'
  },

  pinTwo: {
    fontSize: 13,
    color:color.textColor,
    paddingBottom: 15,
    fontFamily:'GoogleSans-Bold'
  },
  textIn: {
    width: 300,
    borderWidth: 1,
    backgroundColor:color.white,
    borderColor: '#eeeeee30',
    elevation:3,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    color:color.textColor,
    fontSize:13
  },

  infoText: {
    color:color.textColor,
    fontSize: 11.5,
    paddingHorizontal: 45,
    paddingVertical: 5,
    textAlign: 'center',
    fontFamily:'GoogleSans-Regular'
  },

});
