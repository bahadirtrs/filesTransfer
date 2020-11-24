import React, {} from 'react';
import {TouchableOpacity,Text,View} from 'react-native';
import makeStyles from './styles';
const HelpButton = props => {
    const styles = makeStyles();
    return(

      <TouchableOpacity onPress={props.buttonPress}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.bottom}> Nasıl kullanacağını bilmiyor musun?</Text>
              <Text style={styles.learn}>Hemen Öğren</Text>
            </View>
      </TouchableOpacity>

    )
}

export default HelpButton;
