import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Menu from './Menu';
import NoConnected from '../components/Connected/NoConnected';
import color from '../constans/color';

const Help = ({navigation}) => {
  const [value, onChangeText] = useState('Ureless Placeholder');
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
        <View style={styles.container}>
          <ScrollView>
            <View style={{paddingHorizontal:10, paddingTop:10, flexDirection:'row', alignItems:'center', alignContent:'center', width:Dimensions.get('window').width, borderBottomColor:'#e8e8e8', borderBottomWidth:1,}} >
              <FontAwesome5 name={'info-circle'} size={14} color={color.textColor} />
              <Text style={{fontSize:16, fontFamily:'Poppins-Medium', paddingLeft:5,}}>Hakkında</Text>
            </View>

            <View style={{padding:10, flexDirection:'row', alignItems:'center'}} >
              <Text style={{fontSize:12, textAlign:'justify', fontFamily:'Poppins-Regular', paddingLeft:5,}}>Dosya Paylaşımcınız bilgisayarımız ile mobil cihazımız arasında dosya aktarmamız gerektiği zamanlarda, USB kablo zahmetini ortadan kaldırmayı ya da sosyal medya hesaplarından arkadaşlarımıza dosya göndermeyi sonlandırmayı amaçlayan ücretsiz bir uygulamadır.</Text>
            </View>

            <View style={{paddingHorizontal:10, flexDirection:'row', alignItems:'center', alignContent:'center', width:Dimensions.get('window').width, borderBottomColor:'#e8e8e8', borderBottomWidth:1,}} >
              <FontAwesome5 name={'eye-slash'} size={14} color={color.textColor} />
              <Text style={{fontSize:16, fontFamily:'Poppins-Medium', paddingLeft:5,}}>Veri ve Dosya Güvenliği</Text>
            </View>
            <View style={{padding:10, flexDirection:'row', alignItems:'center'}} >
              <Text style={{fontSize:12, textAlign:'justify', fontFamily:'Poppins-Regular', paddingLeft:5,}}>Dosya paylaşımcınıza transfer için yüklediğiniz dosyalar Web Serverler de tutulmaktadır. Bu verilerin güvenliği ise çeşitli güvenlik algoritmalarıyla sağlanmaktadır. Yüklenen dosyaların Serverda tutulma süresi 300-500 sn arasında değişmektedir ve bu süre sonunda dosyalar ve ilgili verilerin temizliği hiçbir kalıntı bırakmayan, temizlik için programlanmış özel robotlar yardımıyla yapılmaktadır.</Text>
            </View>
            <View style={{padding:10, flexDirection:'row', alignItems:'center'}} >
              <Text style={{fontSize:12, textAlign:'justify', fontFamily:'Poppins-Regular', paddingLeft:5,}}>Yüklenen dosyalara erişmenin tek yolu yükleme sırasında kullanıcıya verilen PIN Kodudur. Bu PIN Kodunun güvenliğini sağlamak kullanıcıya aittir. PIN Kodları tahmin edilir bir yapıya sahip olduğundan dolayı yüklenen dosyaların aktarımının tamamlanması sonrasında derhal sistemden silinmesi önerilir. Bu işlem için uygulamamızın ve websitemizin her sayfasında bu işlemleri yapan butonlar bulunmaktadır.</Text>
            </View>

            <View style={{paddingHorizontal:10, flexDirection:'row', alignItems:'center', alignContent:'center', width:Dimensions.get('window').width, borderBottomColor:'#e8e8e8', borderBottomWidth:1,}} >
            <FontAwesome5 name={'envira'} size={14} color={color.textColor} />
            <Text style={{fontSize:16, fontFamily:'Poppins-Medium', paddingLeft:5,}}>Kullanım Amacı</Text>
            </View>
            <View style={{padding:10, flexDirection:'row', alignItems:'center'}} >
              <Text style={{fontSize:12, textAlign:'justify', fontFamily:'Poppins-Regular', paddingLeft:5,}}>Dosya Paylaşımcınız dosya depolamak için oluşturulmuş bir uygulama değildir. Sistemin çalışma prensibi kendisine yüklenen dosyaları hiçbir kalıntı bırakmaksızın silmeye çalışmak üzerine kurulmuştur. Yani dosyalar yüklendiği andan itibaren sistem algoritmaları dosyaları silmeye uğraşacaktır. O yüzden kullanıcı elinden geldiğince hızlı hareket etmek zorundadır. Süre aşımı, tarayıcının veyahut uygulamanın kapatılması vb. durumlarda dosyalar kalıcı olarak silinecektir</Text>
            </View>

            <View style={{paddingHorizontal:10, flexDirection:'row', alignItems:'center', alignContent:'center', width:Dimensions.get('window').width, borderBottomColor:'#e8e8e8', borderBottomWidth:1,}} >
            <FontAwesome5 name={'allergies'} size={14} color={color.textColor} />
            <Text style={{fontSize:16, fontFamily:'Poppins-Medium', paddingLeft:5,}}>Sorumluluklar</Text>
            </View>
            <View style={{padding:10, flexDirection:'row', alignItems:'center'}} >
              <Text style={{fontSize:12, textAlign:'justify', fontFamily:'Poppins-Regular', paddingLeft:5,}}>Dosya Paylaşımcınız yüklenen dosyaların güvenliğini sağlamak için elinden geleni yapmaktadır. Kullanıcıdan kaynaklanın güvenlik açıkları, PIN Kodunun güvenliğinin aksatılması gibi durumlarda Dosya Paylaşımcınız hiç bir sorumluluk kabul etmemektedir.</Text>
            </View>

            <View style={{paddingHorizontal:10, flexDirection:'row', alignItems:'center', alignContent:'center', width:Dimensions.get('window').width, borderBottomColor:'#e8e8e8', borderBottomWidth:1,}} >
            <FontAwesome5 name={'american-sign-language-interpreting'} size={14} color={color.textColor} />
            <Text style={{fontSize:16, fontFamily:'Poppins-Medium', paddingLeft:5,}}>Kişisel Verilerin Korunumu</Text>
            </View>
            <View style={{padding:10, flexDirection:'row', alignItems:'center'}} >
              <Text style={{fontSize:12, textAlign:'justify', fontFamily:'Poppins-Regular', paddingLeft:5,}}>Dosya Paylaşımcınız yüklenen dosyaları ve verilerini hiç bir şekilde 3. Şahıslarla paylaşmamaktadır. Uygulamayı kullanarak, varsa kişisel verileri sistem yöneticileri ile paylaşmayı kabul etmiş olursunuz. Sistem yöneticileri ise sizin bilginiz olmadan dosyalarınıza erişim sağlamaycaktır. Yalnızca uygulamanın ya da diğer dosyaların güvenliğinin tehlikeye düştüğünü düşündüğü durumlarda dosyalara erişecektir ve bu hakka sahiptir.</Text>
            </View>

              
              <Text style={styles.HelpTitle} >Bilgisayardan Mobil Cihaza Aktarım</Text>
              <Text style={styles.HelpMadde}>1. Mobil Uygulamada Dosya Yükle sayfasına giriniz.</Text>
              <Text style={styles.HelpMadde}>2. Sayfanın ortasında bulunan dosya iconuna tıklayınız.</Text>
              <Text style={styles.HelpMadde}>3. Yükleme tamamlandıktan sonra PIN Kodu al butonuna tıklayınız.</Text>
              <Text style={styles.HelpMadde}>4. Sistem tarafından size 4 haneli bir PIN Kodu verilecektir,not ediniz.</Text>
              <Text style={styles.HelpMadde}>5. Diğerseniz Dosya Detayları butonuna basarak yüklediğiniz dosya hakkında detaylı bilgi edinebilirsiniz.</Text>
              <Text style={styles.HelpMadde}>6. Bilgisayarınızdan www.dosyayukle.com sitesine giriniz.</Text>
              <Text style={styles.HelpMadde}>7. Dosya Al butonuna tıklayınız. </Text>
              <Text style={styles.HelpMadde}>8. Mobil Cihazınızdan aldığınız PIN Kodunu ilgili alana giriniz.</Text>
              <Text style={styles.HelpMadde}>9. Açılan sayfada Dosya İndir butonuna tıklayarak dosyanızı indirebilirsiniz.</Text>
              
              <Text style={styles.HelpTitle} >Bilgisayardan Mobil Cihaza Aktarım</Text>
              <Text style={styles.HelpMadde}>1. Bilgisayarınızdan www.dosyayukle.com sitesine giriniz.</Text>
              <Text style={styles.HelpMadde}>2. Dosya Yükle sayfasına giriniz.</Text>
              <Text style={styles.HelpMadde}>3. Dosya Yükle butonuna tıklayınız.</Text>
              <Text style={styles.HelpMadde}>4. Açılan sayfada dosyanızı seçiniz. </Text>
              <Text style={styles.HelpMadde}>5. Yükleme tamamlandıktan sonra PIN Kodu al butonuna tıklayınız.</Text>
              <Text style={styles.HelpMadde}>6. Sistem tarafından size 4 haneli bir PIN Kodu verilecektir,not ediniz. </Text>
              <Text style={styles.HelpMadde}>7. Mobil Uygulamada Dosya al sayfasına gidiniz.</Text>
              <Text style={styles.HelpMadde}>8. Bilgisayardan aldığınız PIN Kodunu ilgili alana giriniz.</Text>
              <Text style={styles.HelpMadde}>9. Açılan sayfada Dosya İndir butonuna tıklayarak dosyanızı indirebilirsiniz.</Text>
                 
              <View style={{height:30}} ></View>
          </ScrollView>
          
          <Menu
            homeScreenPress={() => {navigation.navigate('AnaSayfa'); }}
            searchScreenPress={() => {navigation.navigate('AnaSayfa'); }}
            fileUploadPress={() => {navigation.navigate('DosyaYukle'); }}
            webScreenPress={() => {navigation.navigate('WebSitesi'); }}
            helpScreenPress={() => {navigation.navigate('YardımAl'); }}
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
     : <NoConnected/>
      }
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.backgroundColor,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'center',
  },


  HelpTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color:color.textColor,
    paddingHorizontal:10,
    paddingTop:10,
    
  },
  HelpMadde: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal:10,
    color:color.textColor,
  },

  madCon: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },


});
