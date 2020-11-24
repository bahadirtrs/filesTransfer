import React, {} from 'react';
import {Text,View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import makeStyles from './styles';
import color from '../../../constans/color';

const PropList = props => {
    const styles = makeStyles();
        return(
        <View style={styles.infoElements}>
                <FontAwesome5 name={props.icon} size={14} color={color.mainBackColor} />
                <Text style={styles.infoText}>  {props.text}</Text>
                <Text style={styles.infoData}> {props.action} {props.extra}</Text>
        </View>
    )
}

export default PropList;