import React, {useEffect, useState} from 'react';
import {StyleSheet,ActivityIndicator,View,Text, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Menu from './Menu';
import TextButton from '../components/Buttons/TextButton';
import NoConnected from '../components/Connected/NoConnected';
import color from '../constans/color';

const FileUpload = ({navigation}) => {
  const [random, setRandom] = useState(Math.floor(Math.random() * 80000) + 10000);
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [control, setControl] = useState(1);
  const [debug, setDebug] = useState('Pin Kodu Oluştur');
  const [text, setText] = useState('Lütfen Dosyanı Seç!');
  const [textInfo, setTextInfo] = useState('Dosyanı yukarıdaki icona tıklayarak seçmelisin. Dosyan yüklendikten sonra alttaki Pin Kodu Oluştur butonuna tıklayarak PIN koduna erişebilirsin.!');
  const [pinKodu, setPinKodu] = useState();
  const [internet, setInternet] = useState(true);
  const [deletem, setDeletem] = useState(0);

  const LoadingIndicatorView = () => {
    return <ActivityIndicator color={color.mainBackColor} size="large" />;
  };

  useEffect(() => {
    Direct();
  }, [control]);

  useEffect(() => {
    NetInfo.fetch().then((data) => {
      if (data.isConnected) {
        setInternet(true);
      } else {
        setInternet(false);
      }
    });
  }, []);

  const Listele = async () => {
    try {
      const response = await fetch('http://bahadirtiras.com.tr/react/listeler.php?pin=' + random,);
      const responseJson = await response.json();
      setData(responseJson);
    } catch (error) {
      console.error(error);
    }
    setControl(control + 1);
  };

  const Direct = () => {
    if (data[0]) {
      if (data[0].pin === random.toString()) {
        setChange(true);
        setDebug('Dosya Detayları');
        setText('PIN Kodu oluşturuldu');
        setTextInfo('PIN Kodunu diğer cihaza girerek dosyana erişebilirsin. Dosyalarınız 300 saniye sistemimizde saklamakta, sonrasında kalıcı olarak silinmektedir.');
        setPinKodu(true);
      } else {
        setText('Önce Dosya Seçmelisin!');
      }
    }
  };


  const InsertDataToServer = () => {
    fetch('http://bahadirtiras.com.tr/zzz/clear.php?pin=' + random, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    navigation.push('DosyaYukle', )

  };


  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor={color.mainBackground} />
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', width:'100%', paddingVertical:10, paddingHorizontal:30}} >
            <FontAwesome5 name={'bars'} size={25} color={color.mainBackColor} />
            <FontAwesome5 name={'shield-alt'} size={25} color={color.mainBackColor} />
            </View>
      {internet ?
        <View style={styles.webContainer}>
          <View style={{position:'absolute', top:0, right:150,width:70,  height:70, backgroundColor:'#e1e1e150', borderRadius:10,  transform: [{ rotate: "45deg" }] }}></View>
          <View style={{position:'absolute', top:50, right:20,width:100, height:100, backgroundColor:'#e1e1e150',  borderRadius:10, transform: [{ rotate: "15deg" }] }}></View>
          <View style={{position:'absolute', top:30, right:300,width:90, height:90, backgroundColor:'#e1e1e150',  borderRadius:10, transform: [{ rotate: "55deg" }] }}></View>
          <View style={styles.extraContainer} />
          <View>
             {!pinKodu && (
              <View style={styles.webView}>
                <WebView
                  
                  originWhitelist={['*']}
                  renderLoading={LoadingIndicatorView}
                  startInLoadingState={true}
                  style={{backgroundColor:color.mainBackground}}
                  source={{uri:'http://www.bahadirtiras.com.tr/zzz/uploadfile.php?pin='+ random}}                
                  />
              </View>
            )}
            <View style={styles.pinBlok}>
              {pinKodu ? <FontAwesome5 name={'check-circle'} size={90} color={color.mainBackColor} /> : null}
                         <Text style={styles.title}>{text} </Text>
                         <Text style={styles.Description}>{textInfo}</Text>
              {pinKodu ? <Text style={styles.pinText}>{random}</Text> : null}
                         <TextButton homeUserPress={() => {Listele(); if (change) {navigation.navigate('DosyaPinAl', {pin: random});} }} name={debug} />
              {pinKodu ? <TextButton homeUserPress={() => {InsertDataToServer()}} name="Yeni Dosya Yükle" /> : null}
            </View>
          </View>
          <View>
            <Menu
              homeScreenPress=  {() => {navigation.navigate('AnaSayfa'); }}
              searchScreenPress={() => {navigation.navigate('AnaSayfa'); }}
              fileUploadPress=  {() => {navigation.push('DosyaAl', {title: 'Lütfen Pin Kodunu Gir',});}}
              webScreenPress=   {() => {navigation.navigate('WebSitesi');}}
              helpScreenPress=  {() => {navigation.navigate('OnLoginScreen');}}
              oneIconName="house-user"
              twoIconName="search"
              thirdIconName="download"
              forIconName="globe-americas"
              fiveIconName="info-circle"
              oneIconColor={color.textColor}
              twoIconColor={color.textColor}
              thirdIconColor={color.mainColor}
              forIconColor={color.textColor}
              fiveIconColor={color.textColor}
            />
          </View>
        </View>
      : <NoConnected/>
      }
    </View>
  );
};

export default FileUpload;

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.mainBackground,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  webContainer: {
    flex: 1,
    backgroundColor:color.mainBackground,
    justifyContent: 'space-between',
  },

  extraContainer:{
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 1
  },

  webView:{
    justifyContent: 'flex-start',
    height: 220,
    backgroundColor: color.mainBackground,
  },

  pinBlok:{
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  title: {
    color: color.textColor,
    fontSize: 24,
    marginHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'justify',
    fontFamily:'GoogleSans-Bold'
  },

  Description: {
    fontSize: 11,
    color:color.textColor,
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
    fontFamily:'GoogleSans-Regular'
  },

  pinText: {
    fontSize: 70,
    color:color.textColor,
    padding:10,
    fontFamily:'GoogleSans-Bold'
    
  },
});
