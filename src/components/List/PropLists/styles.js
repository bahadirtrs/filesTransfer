import {StyleSheet} from 'react-native'
import color from '../../../constans/color';

export default () => StyleSheet.create({ 
    infoElements: {
        flexDirection: 'row',
        borderBottomColor: '#00000010',
        borderBottomWidth: 1,
        alignItems: 'center',
        margin: 3,
      },
      infoText: {
        fontSize: 12,
        color: '#555',
      },
      infoData: {
        fontSize: 13,
        color: '#555',
      },
    
  });