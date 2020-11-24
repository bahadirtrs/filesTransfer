import React, {} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import makeStyles from './styles';
const TopIconButton = props => {
    const styles = makeStyles();
    return(

        <View style={styles.topIcon} >
            <TouchableOpacity onPress={props.homeUserPress} style={styles.topButon}>
                 <FontAwesome5 name={props.iconName} size={25} color={props.iconColor }/>
            </TouchableOpacity>
        </View>

    )
}

export default TopIconButton;
