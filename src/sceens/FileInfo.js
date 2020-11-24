import React, {useEffect, useState} from 'react';
import {StyleSheet,View, Text, Image, Modal, TouchableOpacity, ScrollView,} from 'react-native';
import {WebView} from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { Dimensions } from 'react-native';

import Menu from './Menu';
import TextButton from '../components/Buttons/TextButton';
import CloseButton from '../components/Buttons/CloseButton';
import PropList from '../components/List/PropLists';
import color from '../constans/color';

function FileInfo({route, navigation}) {
  const {pin} = route.params;
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [buton, setButon] = useState('Verileri Temizle');
  const [redirect, setRedirect] = useState(0);
  useEffect(() => {
    Listele();
  }, []);

  useEffect(() => {
    Redirect();
  }, [redirect]);

  useEffect(() => {
    setButon('Verileri Temizle');
  }, [isSelected]);

  const Listele = async () => {
    try {
      const response = await fetch('http://bahadirtiras.com.tr/react/listeler.php?pin=' + pin, );
      const responseJson = await response.json();
      setData(responseJson);
      setRedirect(1);
    } catch (error) {
      console.error(error);
    }
  };

  const Redirect = () => {
    if (data[0]) {
      if (data[0].pin === pin.toString()) {
      } else {
        navigation.replace('DosyaYukle',);
      }
    }
  };


  // Veri temizleme fonksiyonu -kayit - dosya - mindosya
  const InsertDataToServer = () => {
    fetch('http://bahadirtiras.com.tr/zzz/clear.php?pin=' + pin, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setModalVisible2(!modalVisible2);
    navigation.replace('DeleteFile',);
  };
  var bold = { 
    fontFamily: 'Poppins-Bold',
};
  return (
    <View style={styles.container}>
      {data[0] && (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            {data[0].pass === 'jpg' || data[0].pass === 'png' || data[0].pass === 'bmp' || data[0].pass === 'jpeg' || data[0].pass === 'JPG' ||  data[0].pass === 'JPEG' || data[0].pass === 'BMP'
            ? <Image style={styles.headerImage} source={{uri: 'http://www.bahadirtiras.com.tr/zzz/' + data[0].mindos,}} />
            : <Image style={styles.headerImage} source={{uri: 'http://www.bahadirtiras.com.tr/zzz/img/uzanti/' + data[0].pass +'.png',}}/>
            }
            <Text style={styles.headerText}>{data[0].name} </Text>
          </View>
          <ScrollView>
            <View style={styles.infoContainer}>

                <PropList icon='key' text='Pin Kodu:'      action={data[0].pin}/>
                <PropList icon='file-excel' text='Dosya Uzantısı:'  action={data[0].pass}/>
                <PropList icon='folder' text='Dosya Boyutu:'    action={data[0].boyut} extra="MB"/>
                <PropList icon='images' text='Çözünürlük:'      action={data[0].cozunurluk}/>
                <PropList icon='clock' text='Yükleme Zamanı:'  action={data[0].times}/>
                <PropList icon='stopwatch' text='T.Silme Zamanı:'  action={data[0].times} />

                <View style={styles.butonContainer}>
                  <TextButton homeUserPress={() => {navigation.goBack(); }} name="Geri Dön" />
                  <Text style={styles.footerHeader}> Yüklediğiniz fotoğraf dosyaları orjinal boyutu ile transfer edilmektedir. Ancak önizlemeleri düşük kalitede gösterilmektedir.</Text>
                </View>

            </View>
          </ScrollView>

          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <TouchableOpacity onPress={ ()=>{setModalVisible(!modalVisible);} } style={styles.centeredView}>
              <View style={styles.modalView}>
                <CloseButton butonPress={ ()=>{setModalVisible(!modalVisible);} }/>
                <View style={styles.ModalContainer}>
                  <FontAwesome5 name={'file-download'} size={90} color={color.mainBackColor} />
                  <Text style={styles.question}>  <Text style={bold}>{data[0].name}</Text>  isimli dosyayı indirmek istiyor musunuz?</Text>
                    <View style={{alignItems: 'center', paddingBottom:30}}>
                    <TextButton homeUserPress={ () =>navigation.replace('Download', {pin:pin})  } name="Dosyayı İndir" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>

          <Modal animationType="fade" transparent={true} visible={modalVisible2}>
          <TouchableOpacity onPress={ ()=>{setModalVisible2(!modalVisible2);} } style={styles.centeredView}>
              <View style={styles.modalView}>
                <CloseButton butonPress={ ()=>{setModalVisible2(!modalVisible2);} }/>
                <View style={styles.ModalContainer}>
                  <FontAwesome5 name={'trash-alt'} size={90} color={color.mainBackColor} />
                  <Text style={styles.question}>  <Text style={bold}>{data[0].name}</Text>  isimli dosyayı silmek istediğinize emin misiniz? </Text>
                    <View style={{alignItems: 'center', paddingBottom:30}}>
                    <TextButton homeUserPress={ () =>navigation.replace('DeleteFile', {pin:pin})  } name="Dosyayı Sil" />
                  </View>
                </View>
              </View>
              </TouchableOpacity>
          </Modal>

          <View style={{backgroundColor: '#ddd', height: 1}} />
            <Menu
             
              homeScreenPress={() => {navigation.navigate('AnaSayfa');}}
              searchScreenPress={() => {setModalVisible(true); }}
              fileUploadPress={() => {setModalVisible2(true); }}
              webScreenPress={() => {navigation.navigate('WebSitesi');}}
              helpScreenPress={() => {navigation.navigate('YardımAl');}}
              oneIconName="house-user"
              twoIconName="arrow-down"
              thirdIconName="trash"
              forIconName="globe-americas"
              fiveIconName="info-circle"
              oneIconColor={color.textColor}
              twoIconColor={color.textColor}
              thirdIconColor={color.mainColor}
              forIconColor={color.textColor}
              fiveIconColor={color.textColor}
            />
        </View>
      )}
    </View>
  );
}

export default FileInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  headerContainer: {
    flexDirection: 'column',
    backgroundColor:color.mainBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerImage: {
    width: 400,
    height: 250,
    borderColor:color.black,
  },

  headerText: {
    fontSize: 10,
    padding: 10,
    color:color.black,
    fontFamily: 'Poppins-Bold',
    alignItems: 'center',
  },

  infoContainer:{
    justifyContent: 'space-around',
     padding: 20
    },

  butonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical:30,
  },

  footerHeader:{
    fontSize: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    paddingVertical: 40,
    paddingHorizontal:20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom:0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor:'#00000099'
  },

  modalView: { 
    backgroundColor:color.headerColor,
    borderRadius: 20,
    elevation:10,
    width: Dimensions.get('window').width,
    },

  ModalContainer:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },

  modalPixe:{
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingRight: 10,
    backgroundColor:color.mainBackground,
  },

  question:{
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal:30,
    paddingVertical:15,
    fontFamily: 'Poppins-Regular',
    textAlign:'center',
    color:color.textColor,
  },

  clickContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 30
  },

  click:{
    fontFamily: 'Poppins-Regular',
    fontSize: 12
  },

  footerInfo:{
    paddingHorizontal:40,
    fontSize: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color:color.textColor
  },
});
