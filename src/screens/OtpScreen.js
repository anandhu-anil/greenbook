import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Colors from '../styles/Colors';
import {width, height} from '../styles/Layout';
import footer from '../assets/images/artone.png';
import IconEY from 'react-native-vector-icons/Entypo';

const otp = (props) => {
  const onPress = () => {};
  console.log(props);

  return (
    <View style={styles.Container}>
      <View style={styles.Ellipse1}>
        <Image source={require('../assets/images/EllipseTop.png')} />
      </View>
      <View Style={styles.OtpContainer}>
        <View style={styles.outer}>
          <View style={styles.Box}>
            <IconEY
              name="mail-with-circle"
              size={80}
              color={Colors.DARKGREEN_COLOR}
            />
          </View>
          <Text style={styles.text}>ENTER 4-DIGIT CODE</Text>
          <View style={styles.innerContainer}>
            <View style={styles.inner}></View>
            <View style={styles.inner}></View>
            <View style={styles.inner}></View>
            <View style={styles.inner}></View>
          </View>
          <Text style={styles.texter}>1:00</Text>
          <View style={styles.bottomContainer}>
             <Text style={styles.Resend}>
                 RESEND
             </Text>
          </View>
        </View>
      </View>
      <View style={styles.EllipseBottom2}>
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
  outer: {
    height: height * 0.45,
    backgroundColor: Colors.WHITE_COLOR,
    marginHorizontal: 35,
    marginVertical: 1,
    borderRadius: 15,
    elevation: 5,
  },
  Ellipse1: {
    top: 0,
  },
  Container: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },
  Box: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 9,
  },
  text: {
    fontFamily: 'century Gothic',
    fontSize: 16,
    color: Colors.DARKGREEN_COLOR,
    textAlign: 'center',
    lineHeight: 45,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  inner: {
    height: height * 0.1,
    backgroundColor: Colors.WHITE_COLOR,
    marginHorizontal: 7,
    width: width * 0.17,
    marginVertical: 5,
    borderRadius: 6,
    elevation: 5,
  },
  texter:{
    fontFamily: 'century Gothic',
    fontSize: 18,
    color: Colors.DARKGREEN_COLOR,
    textAlign: 'left',
    lineHeight: 65,
    margin:20
  },
  bottomContainer:{
    height: height * 2,
    backgroundColor: Colors.WHITE_COLOR,
    width: width * 0.26,
    borderRadius: 13,
    elevation: 10,
    flex:1,
    padding:15,
    lineHeight:35,
    bottom:70,
    left:65
  },
  Resend:{
    fontFamily: 'century Gothic',
    fontSize: 16,
    color: Colors.DARKGREEN_COLOR,
    textAlign: 'center',
    lineHeight: 15,
  },
  EllipseBottom2: {
    bottom: 345,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  footerImage: {
    height: height * 0.21,
    width: width * 0.97,
  },
});
export default otp;
