import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Colors from '../styles/Colors.js';
import {width, height} from '../styles/Layout';

const CustomTextInput = ({placeholder, onChangeText}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: 'century Gothic',
    opacity: 0.59,
    textAlign: 'left',
    color: Colors.DARKGREEN_COLOR,
    marginHorizontal:15
  },
});

export default CustomTextInput;
