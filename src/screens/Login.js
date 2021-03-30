import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../styles/Colors';
import CustomButton from '../components/CustomButton.js';
import CustomTextInput from '../components/CustomTextInput.js';
import Strings from '../utils/String.js';
import {width, height} from '../styles/Layout';
import footer from '../assets/images/artone.png';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Login = (props) => {
  const onPress = () => {};
  console.log(props);
  return (
    <View style={styles.contain}>
      <View style={styles.Ellipsed}>
        <Image source={require('../assets/images/EllipseTop.png')} />
      </View>
      <View Style={styles.OtpContainer}>
        <View style={styles.outer}>
          <View style={styles.Box}>
            <IconFA
              name="user-circle"
              size={80}
              color={Colors.DARKGREEN_COLOR}
            />
          </View>
          <View style={styles.details}>
            <CustomTextInput placeholder={Strings.placeholder.name} />
            <View style={styles.rectangle}>
              <Image source={require('../assets/images/Rectangle.png')} />
            </View>
            <CustomTextInput placeholder={Strings.placeholder.institution} />
            <View style={styles.rectangle}>
              <Image source={require('../assets/images/Rectangle.png')} />
            </View>
            <CustomTextInput placeholder={Strings.placeholder.id} />
            <View style={styles.rectangle}>
              <Image source={require('../assets/images/Rectangle.png')} />
            </View>
            <CustomTextInput placeholder={Strings.placeholder.mail} />
            <View style={styles.rectangle}>
              <Image source={require('../assets/images/Rectangle.png')} />
            </View>
          <View style={styles.profile}>
            <CustomButton buttonValue={Strings.button.pro} onPress={onPress} />
          </View>
          </View>
        </View>
        <View style={styles.EllipseBottom3}>
          <Image source={require('../assets/images/Ellipse.png')} />
        </View>
        <View style={styles.bottom1}>
          <Image
            source={footer}
            resizeMode="contain"
            style={styles.footerImage1}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },
  Ellipsed: {
    top: 0,
  },
  outer: {
    height: height * 0.68,
    width: width * 1,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 45,
    elevation: 5,
    bottom: 115,
  },
  EllipseBottom3: {
    bottom: 495,
  },
  footerImage1: {
    height: height * 1.87,
    width: width * 0.4,
    marginHorizontal: 115,
  },
  bottom1: {
    position: 'absolute',
    bottom: 0,
  },
  Box: {
    width: width * 0.98,
    justifyContent: 'center',
    alignItems: 'center',
    top: 9,
  },
  details: {
    height: height * 1.97,
    width: width * 0.87,
    color: Colors.DARKGREEN_COLOR,
    marginLeft:32,
    margin:29
  },
  profile:{
    margin:66
  },
  rectangle:{
    margin:7
  },
});

export default Login;
