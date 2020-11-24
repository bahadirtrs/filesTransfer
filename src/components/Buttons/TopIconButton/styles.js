import {StyleSheet} from 'react-native'
import color from '../../../constans/color';

export default () => StyleSheet.create({

    topIcon:{
        backgroundColor:'#f1f1f1',
        marginBottom:30,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        width:80,
        height:80,
        borderWidth:0,
        borderColor:'#f1f1f1',
        borderRadius:50,
      },

      topButon:{
        color:color.mainColor,
        backgroundColor:color.mainBackColor,
        marginBottom:0,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        width:60,
        height:60,
        elevation:5,
        borderWidth:1,
        borderColor:'#f1f1f1',
        borderRadius:50,
      },



  });
