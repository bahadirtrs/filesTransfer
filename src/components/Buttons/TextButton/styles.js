import {StyleSheet} from 'react-native'
import color from '../../../constans/color';

export default () => StyleSheet.create({

buton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: color.mainBackColor,
    borderRadius: 10,
    width: 300,
    elevation:3,
    borderColor:'#dddddd50',
    borderWidth:1,
  },

  butonText: {
    fontSize: 16,
    color: color.mainColor,
    fontFamily:'GoogleSans-Medium'
  },

  });
