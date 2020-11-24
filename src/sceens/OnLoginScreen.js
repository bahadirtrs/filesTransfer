import React from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
  <TouchableOpacity
    color="#f8bd2c"
    style={{paddingLeft: 30, fontFamily: 'Poppins-Bold'}}
    {...props}>
    <Text style={{fontFamily: 'Poppins-Medium', color: '#fff'}}>
      Tanıtımı Geç
    </Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity color="#f8bd2c" style={{paddingRight: 30}} {...props}>
    <Text style={{fontFamily: 'Poppins-Medium', color: '#fff'}}>İleri</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
    color="#f8bd2c"
    style={{paddingRight: 30, fontFamily: 'Poppins-Bold'}}
    {...props}>
    <Text style={{fontFamily: 'Poppins-Medium', color: '#fff'}}>Tamamla</Text>
  </TouchableOpacity>
);

const OnLoginScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.navigate('AnaSayfa')}
      onDone={() => navigation.navigate('AnaSayfa')}
      titleStyles={{fontFamily: 'Poppins-Bold', fontSize: 45, margin: 20}} //
      subTitleStyles={{
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        padding: 10,
        top: -40,
      }}
      pages={[
        {
          backgroundColor: '#0077b6',
          image: <Image style={{height: 10, width: 10}} />,
          subtitle: 'www.dosyayukle.com',
          title: 'Merhaba',
        },

        {
          backgroundColor: '#2a9d8f',
          image: (
            <Image
              style={{height: 160, width: 300}}
              source={require('../img/sds.png')}
            />
          ),
          subtitle:
            'Dosya Paylaşımcınız Bilgisayarınız ile Akıllı Telefonunuz arasında, dosyalarınızı transfer etmek için oluşturulmuş bir uygulamadır.',
          title: '',
        },
        {
          backgroundColor: '#5390d9',
          image: (
            <Image
              style={{height: 260, width: 350}}
              source={require('../img/1.png')}
            />
          ),
          title: '',
          subtitle:
            'Hem Mobil uygulamamız üzerinden, hemde Web adresimiz üzerinden dosyalarınızı kolaylıkla yükleyip, indirebilirsiniz.',
        },
        {
          backgroundColor: '#118ab2',
          image: (
            <Image
              style={{height: 260, width: 350}}
              source={require('../img/2.png')}
            />
          ),
          title: '',
          subtitle:
            'İlk olarak herhangi bir cihazdan "Dosya Yükle" butonuna tıklayarak dosyanızı seçmelisiniz. Sistem dosyanızı size özel bir alana taşıyacaktır.',
        },
        {
          backgroundColor: '#74c69d',
          image: (
            <Image
              style={{height: 260, width: 350}}
              source={require('../img/3.png')}
            />
          ),
          title: '',
          subtitle:
            'Daha sonra sistem tarafından size bir PIN kodu verilecektir. Bu PIN Kodu dosyanıza ulaşmanız için kullacağınız benzersiz bir anahtardır.',
        },
        {
          backgroundColor: '#90be6d',
          image: (
            <Image
              style={{height: 260, width: 350}}
              source={require('../img/4.png')}
            />
          ),
          title: '',
          subtitle:
            'İkinci yapmanız gereken ise diğer cihazınızda "Dosya İndir" sayfasına giderek size verilen PIN kodunu bu alana girmek olacaktır.',
        },
        {
          backgroundColor: '#84a98c',
          image: (
            <Image
              style={{height: 260, width: 350}}
              source={require('../img/5.png')}
            />
          ),
          title: '',
          subtitle:
            'PIN Kodunuz ile bir eşleşme bulunduğu taktirde, dosyanıza erişim izinleri açılacak ve İndirme sayfasına yönlendirileceksiniz. Bu sayfada "İndir" butonuna tıklayarak, dosyanızı indirebilirsiniz.',
        },
        {
          backgroundColor: '#0ead69',
          image: <Image style={{height: 10, width: 10}} />,
          title: 'Hazırsanız Başlayalım',
          subtitle: 'www.dosyayukle.com',
        },
      ]}
    />
  );
};
export default OnLoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
