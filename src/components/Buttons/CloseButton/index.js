import React, {} from 'react';
import {TouchableHighlight,View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import makeStyles from './styles';
const CloseButton = props => {
    const styles = makeStyles();
    return(

      <View style={{alignItems:'flex-end', paddingTop:10, paddingRight:10,}}>
         <TouchableHighlight style={styles.butonCloseTwo} onPress={props.butonPress}>
            <FontAwesome5 name={'times'} size={30} color='#555' />
         </TouchableHighlight>
      </View>

    )
}

export default CloseButton;
