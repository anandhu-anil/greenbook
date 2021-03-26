import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Colors from '../styles/Colors';
import {width, height} from '../styles/Layout';

const CustomTextInput = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
    borderRadius: 3,
    borderColor:Colors.WHITE_COLOR,
    borderWidth: 13,
    justifyContent: 'center',
    width: width*0.78,
    elevation:3

  },
  input: {
    fontSize: 14,
    fontFamily: 'century Gothic',
    opacity: 0.59,
    textAlign: 'center',
  }
});

export default CustomTextInput;
