import React, {} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import makeStyles from './styles';
const IconButton = props => {
    const styles = makeStyles();
    return(
        <TouchableOpacity onPress={props.homeUserPress} style={styles.icon}>                
            <FontAwesome5 name={props.iconName} size={26} color={props.iconColor} />
        </TouchableOpacity>
    )
}

export default IconButton;