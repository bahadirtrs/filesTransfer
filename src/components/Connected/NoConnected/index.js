import React, {} from 'react';
import {Text,View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import makeStyles from './styles';
import color from '../../../constans/color';
const NoConnected = props => {
    const styles = makeStyles();
    return(

   <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
      <FontAwesome5 name='wifi' size={80} color={color.mainBackColor} />
      <Text style={styles.noConnectedTitle}> İnternet Bağlantısı Yok! </Text>
      <Text style={styles.noConnectedDes}> Lütfen bir ağa bağlanıp tekrar deneyin</Text>
    </View>

    )
}

export default NoConnected;
