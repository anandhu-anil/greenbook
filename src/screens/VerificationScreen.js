import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Colors from '../styles/Colors';
import CustomButton from '../components/CustomButton.js';
import CustomTextInput from '../components/CustomTextInput.js';
import Strings from '../utils/String.js';
import {width, height} from '../styles/Layout';
import footer from '../assets/images/artone.png';
import IconMI from 'react-native-vector-icons/AntDesign';

const Verify = (props) => {
  const onPress = () => {};
  console.log(props);

  return (
    <View style={styles.VerifyMain}>
      <View style={styles.Ellipse}>
        <Image source={require('../assets/images/EllipseTop.png')} />
      </View>
      <View style={styles.Verification}>
        <View style={styles.iconBox}>
          <IconMI name="check" size={40} color={Colors.DARKGREEN_COLOR} />
         </View>
        <CustomTextInput placeholder={Strings.placeholder.text} />
        <CustomButton buttonValue={Strings.button.otp} onPress={onPress} />
      </View>
      <View style={styles.EllipseBottom}>
        <Image source={require('../assets/images/Ellipse.png')} />
      </View>
      <View style={styles.bottom}>
        <Image
          source={footer}
          resizeMode="contain"
          style={styles.footerImage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  VerifyMain: {
    backgroundColor: Colors.WHITE_COLOR,
    flex:1
  },
  Verification: {
    alignItems: 'center',
    flex: 1,
    top:89
  },
  Ellipse: {
    top: 0,
  },
  EllipseBottom: {
    bottom: 0,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  footerImage: {
    height: height*0.21,
    width: width*0.97
  },
  iconBox:{
    marginRight:239
  }
});
export default Verify;
