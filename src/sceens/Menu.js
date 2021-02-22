import React from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from '../components/Buttons/IconButton';
import TopIconButton from '../components/Buttons/TopIconButton';

const Menu = (props) => {
  return (
    <View>
    <View style={{backgroundColor: '#ddd', height: 1}} />
    <View
      style={{
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 30,
        alignItems: 'center',
        padding: 1,
        marginBottom: 0,
        backgroundColor: '#fff',
      }}>
      <IconButton
        iconName={props.oneIconName}
        iconColor={props.oneIconColor}
        homeUserPress={props.homeScreenPress}
      />
      <IconButton
        iconName={props.twoIconName}
        iconColor={props.twoIconColor}
        homeUserPress={props.searchScreenPress}
      />
      <TopIconButton
        iconName={props.thirdIconName}
        iconColor={props.thirdIconColor}
        homeUserPress={props.fileUploadPress}
      />
      <IconButton
        iconName={props.forIconName}
        iconColor={props.forIconColor}
        homeUserPress={props.webScreenPress}
      />
      <IconButton
        iconName={props.fiveIconName}
        iconColor={props.fiveIconColor}
        homeUserPress={props.helpScreenPress}
      />
    </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  topIcon: {
    backgroundColor: '#f1f1f1',
    marginBottom: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderWidth: 0,
    borderColor: '#f1f1f1',
    borderRadius: 50,
  },

  topButon: {
    backgroundColor: '#f8bd2c',
    marginBottom: 0,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 50,
  },

  icon: {
    alignItems: 'center',
    width: 60,
  },
});
