import React, {} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import makeStyles from './styles';
const TextButton = props => {
    const styles = makeStyles();
    return(
        <TouchableOpacity onPress={props.homeUserPress} style={styles.buton}>
          <Text style={styles.butonText}>{props.name}</Text>
        </TouchableOpacity >
    )
}

export default TextButton;