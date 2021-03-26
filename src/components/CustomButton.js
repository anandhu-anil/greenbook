import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../styles/Colors';
import {width, height} from '../styles/Layout';

const CustomButton = ({buttonValue, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{buttonValue}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height * 0.05,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 10,
    width:160,
    elevation: 5,
    justifyContent: 'center',
    margin:10,

  },
  buttonText: {
    color: Colors.DARKGREEN_COLOR,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CustomButton;