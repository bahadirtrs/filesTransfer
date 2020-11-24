import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextButton from '../components/Buttons/TextButton';
import color from '../constans/color';

function DeleteFile({route,navigation}) {
  const {pin} = route.params;  
  useEffect(() => {
    InsertDataToServer()
  }, []);
  const InsertDataToServer = () => {
    fetch('http://bahadirtiras.com.tr/zzz/clear.php?pin=' + pin, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };
return (
    <View style={styles.container}>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',textAlign: 'center', }}>
      <FontAwesome5 name={'trash-alt'} size={110} color={color.mainBackColor} />
        <Text style={styles.url}>Dosyanız Başarıyla Silindi</Text>
        <Text style={styles.urlDes}>Dosya Paylaşımcınızın gelişimine katkı sağlamak için kısa bir reklam izlemenizi rica ederiz.</Text>
        <TextButton  name="Reklam İzle" />
        <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa', )}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.bottom}> Reklam izlemek istemiyor musun?</Text>
            <Text style={styles.learn}>Anasayfaya Dön</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default DeleteFile;
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
