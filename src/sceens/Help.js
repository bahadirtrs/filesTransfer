import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import color from '../constans/color';

const Help = ({navigation}) => {
  const [value, onChangeText] = useState('Ureless Placeholder');
  const [internet, setInternet] = useState(true);

  useEffect(() => {
    NetInfo.fetch().then((data) => {
      if (data.isConnected) {
        setInternet(true);
      } else {
        setInternet(false);
      }
    });
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.backgroundColor,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'center',
  },


  HelpTitle: {
    fontSize: 16,
    color:color.textColor,
    paddingHorizontal:10,
    paddingTop:10,
    
  },
  HelpMadde: {
    fontSize: 12,
    paddingHorizontal:10,
    color:color.textColor,
  },

  madCon: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },


});
