import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

export default function Header({
  rightIcon,
  rightIconCallback,
  leftIcon,
  leftIconCallback,
  title,
}) {
  return (
    <View style={styles.root}>
      <View>{rightIcon}</View>
      <View style={styles.titleContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View>{leftIcon}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    zIndex: 100,
  },
  icon: {
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
