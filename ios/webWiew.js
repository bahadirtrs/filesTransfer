import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, Modal, TouchableOpacity, TouchableHighlight, ar, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
import {TextInput} from 'react-native-gesture-handler';
import CookieManager from 'react-native-cookies';
import { set } from 'react-native-reanimated';










function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('./src/img/logo.png')} style={styles.Logo} />
      <Text style={styles.title}>Dosya Paylaşımcınız</Text>
      <Text style={styles.Description}>
        Bizde biliyoruz iki cihaz arasında küçük bir dosya transferinin oldukça
        meşakatli olduğunu
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DosyaYukle')}
        style={styles.buton}>
        <Text style={styles.butonText}>Dosya Yükle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DosyaAl')}
        style={styles.buton}>
        <Text style={styles.butonText}>Dosya Al</Text>
      </TouchableOpacity>
      <Text style={styles.bottom}>Nasıl kullanacağını bilimiyor musun?</Text>
      <Text style={styles.learn}>Hemen Öğren</Text>
    </View>
  );
}











function FileUpload({ navigation}) {
  const [random, setRandom]= useState(Math.floor(Math.random()*8000)+1000 );


  return (
  <View style ={styles.webContainer}>
    <View style={{flex:4, justifyContent:'flex-end', alignItems:'center',}}>

      </View>
      <View style={{flex:19,}}>
         <WebView source={{uri:'http://www.bahadirtiras.com.tr/new/mobile/uploadfile.php?pin='+random}} />
      </View>
      <View style={{flex:32, justifyContent:'flex-start', alignItems:'center',}} >
      <Text style={styles.pin}>Lütfen Dosyanı seç!</Text>
      <Text style={styles.infoUploadText}>
      Dosyanı icona tıklayarak seçtikten sonra alttaki "Pin Kodu Al"  butonuna basarak koduna erişebilirsin.
      </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DosyaPinAl', {pin: random});
            }}
            style={styles.buton}>
            <Text style={styles.butonText}>PIN Kodu Al </Text>
          </TouchableOpacity>

          <Text style={styles.exBottom}>Nasıl Kullanacağını bilmiyor musun?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DosyaDetay', {value: 85});
            }}>
            <Text style={styles.learnBottom}>Hemen Öğren</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}




function FileDownloand({navigation}) {
  const [value, onChangeText] = useState('Ureless Placeholder');

  return (
    <View style={styles.uploadContainer}>
      <Image source={require('./src/img/pintext.png')} style={styles.LogoPin} />
      <Text style={styles.pin}>Lütfen Pin Kodunu Gir!</Text>
      <TextInput
        placeholder="PIN Kodu"
        style={styles.textIn}
        keyboardType="number-pad"
        onChangeText={(text) => onChangeText(text)}
        //value= {value}
      />
      <Text style={styles.infoText}>
        Çok az zamanın kaldı. Acele et. Dosyalarına eriştikten sonra verileri
        temizlemen gerektiğini unutma
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DosyaDetay', {pin: value});
        }}
        style={styles.buton}>
        <Text style={styles.butonText}>Dosyaya Git</Text>
      </TouchableOpacity>
      <Text style={styles.exBottom}>PIN Kodunu bilmiyor musun?</Text>
      <TouchableOpacity

        onPress={() => {
          navigation.navigate('DosyaDetay', {value: 85});
        }}>
        <Text style={styles.learnBottom}>Nasıl Kullanacağını Öğren</Text>
      </TouchableOpacity>
    </View>
  );
}






function Files({route, navigation}) {
  const {pin} = route.params;
  return (
    <WebView source={{uri:'http://www.bahadirtiras.com.tr/new/client-end-mobile.php?pin=' +pin, }}
    />
  );
}






function FileDescription({route, navigation}) {
  const {pin} = route.params;
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    Listele();
  }, []);

  const Listele = async () => {
    try {
      const response = await fetch(
        'http://bahadirtiras.com.tr/react/listeler.php?pin=' + pin,
      );
      const responseJson = await response.json();
      setData(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {data[0] && (
        <View style={styles.container}>


      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WebView source={{uri: 'http://bahadirtiras.com.tr/new/mobile/client-end-mobile.php?pin='+pin,}} />
            <TouchableHighlight style={styles.buton} onPress={() => {setModalVisible(!modalVisible); }} >
                <Text style={styles.textStyle}>Kapat</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Text style={styles.FileTextTit}> {data[0].id ? "İşte dosyan burada":"Hay aksi. Bir sorun var"}   </Text>
          <Text style={styles.FileText}>{data[0].id ? "Alttaki butona tıklayarak indirebilirsin.":"Bir şeyler ters gitti, dosyayı bulamadık"}  </Text>
          {data[0].id ?<Image style={styles.image1Error} source={{  uri:'http://www.bahadirtiras.com.tr/new/'+ data[0].dosya,}}/>:<Image style={styles.image1Error}  source={require('./src/img/error.png')} />}
          <Text style={styles.FileName}>{data[0].name}</Text>
          <TouchableOpacity
           onPress={data[0].id? () => {setModalVisible(true);}  :  () => navigation.goBack() }
            style={styles.buton}>
            <Text style={styles.butonText}> {data[0].id? "Dosyayı İndir":"Geri Gön"}   </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}



function FileInfo({route, navigation}) {
  const {pin} = route.params;
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    Listele();
  }, []);

  const Listele = async () => {
    try {
      const response = await fetch(
        'http://bahadirtiras.com.tr/react/listeler.php?pin=' + pin,
      );
      const responseJson = await response.json();
      setData(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {data[0] && (
        <View style={styles.container}>


      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WebView source={{uri: 'http://bahadirtiras.com.tr/new/mobile/client-end-mobile.php?pin='+pin,}} />
            <TouchableHighlight style={styles.buton} onPress={() => {setModalVisible(!modalVisible); }} >
                <Text style={styles.textStyle}>Kapat</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Text style={styles.FileTextTit}> {data[0].id ? "Dosya yüklendi!":"Hay aksi. Bir sorun var"}   </Text>
          <Text style={styles.FileText}>{data[0].id ? "Diğer cihazda PIN alanına girmelisin...":"Bir şeyler ters gitti, dosyayı bulamadık"}  </Text>
          <Text style={styles.pinText} >{data[0].pin}</Text>
          {data[0].id ?<Image style={styles.image1} source={{  uri:'http://www.bahadirtiras.com.tr/new/'+ data[0].dosya,}}/>:<Image style={styles.image1Error}  source={require('./src/img/error.png')} />}
          <Text style={styles.FileName}>{data[0].name}</Text>


          <TouchableOpacity

           onPress={data[0].id? () => {setModalVisible(true);}  :  () => navigation.goBack() }

            style={styles.buton}>
            <Text style={styles.butonText}> {data[0].id? "Verileri Temizle":"Geri Gön"}   </Text>
          </TouchableOpacity>


        </View>
      )}
    </View>
  );
}










const Stack = createStackNavigator();





export default function App() {
  return (
    
   
    <NavigationContainer>
       <StatusBar hidden={true}/>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Stack.Screen name="AnaSayfa" component={HomeScreen} />
        <Stack.Screen name="DosyaAl" component={FileDownloand} />
        <Stack.Screen name="DosyaYukle" component={FileUpload} />
        <Stack.Screen name="DosyaDetay" component={FileDescription} />
        <Stack.Screen name="DosyaDownloand" component={Files} />
        <Stack.Screen name="DosyaPinAl" component={FileInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1dbe72',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadContainer: {
    flex: 1,
    backgroundColor: '#1dbe72',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  webContainer: {
    flex:1,
    backgroundColor: '#1dbe72',

  },

  menuContainer: {
    flex:1,
    backgroundColor: '#1dbe72',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },

  menuText:{
    color:'white',
    fontFamily: 'Poppins-Medium'
  },


  Logo: {
    width: 300,
    height: 170,
  },

  LogoPin: {
    width: 100,
    height: 120,
    marginBottom: 25,
  },

  title: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 20,
    marginTop: 20,
  },

  Description: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  DescriptionCons: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },

  buton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#f8bd2c',
    borderRadius: 5,
    width: 300,
  },

  butonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },

  bottom: {
    fontSize: 12,
    paddingTop: 50,
    marginTop: 0,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },

  exBottom: {
    fontSize: 14,
    paddingTop: 50,
    marginTop: 0,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },

  learn: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },

  learnBottom: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    textAlign: 'center',
  },

  pin: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },

  infoText: {
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 25,
    paddingVertical: 5,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

  infoUploadText: {
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 40,
    paddingVertical: 5,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

  textIn: {
    width: 300,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    fontFamily: 'Poppins-Regular',
  },

  pinText:{
    fontSize:60,
    color: '#fff',
    fontFamily: 'Poppins-Bold'

  },

  container1: {
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center',
  },

  image1: {
    width: 300,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },

  image1Error: {
    width: 300,
    height: 300,
    marginTop: 30,
    marginBottom: 10,

  },

  FileName: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 20,
    paddingVertical: 0,
    fontFamily: 'Poppins-Regular',
  },

  FileTextTit:{
    fontSize: 27,
    color: 'white',
    fontFamily: 'Poppins-Bold',

    paddingTop: 30,
    paddingHorizontal: 0,
    textAlign: 'center',
  },


  FileText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    paddingBottom: 0,
    paddingHorizontal: 0,
    textAlign: 'center',
  },

  pin1: {
    fontSize: 50,
  },

  ///modalll

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    maxHeight:310,
    maxWidth:350,
    backgroundColor: "white",
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
