import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Colors from '../styles/Colors.js';
import {width, height} from '../styles/Layout';
import Logo from '../assets/images/artone.png';
import IconME from 'react-native-vector-icons/Entypo';
import IconEN from 'react-native-vector-icons/Entypo';

const Home = (props) => {
  const onPress = () => {};
  console.log(props);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.menu}>
            <IconME name="menu" size={40} color={Colors.LIGHTGREEN_COLOR} />
          </View>
          <View style={styles.Logo}>
            <Image source={Logo} resizeMode="center" style={styles.logoimage} />
          </View>
        </View>
        <View style={styles.below}>
          <View style={styles.lavender}>
            <Image source={require('../assets/images/Banner.png')} />
          </View>
          <View style={styles.Curve}>
            <Image source={require('../assets/images/curve.png')} />
            <Text style={styles.Text}>
              Welcome to the world of plants, Anandhu.
            </Text>
            <Text style={styles.Text1}>In Picture:</Text>
            <Text style={styles.Text2}> Madar- Calotropis Gigantea</Text>
          </View>
          <View style={styles.write}>
            <Text style={styles.write1}>Write Something...</Text>
            <Text style={styles.write2}>
              Write about your plant, Share its growth, Inspire others.
            </Text>
            <View style={styles.ellipsedirect}>
              <View style={styles.direct}>
                <IconME
                  name="direction"
                  size={30}
                  color={Colors.LIGHTGREEN_COLOR}
                />
              </View>
            </View>
            <View style={styles.flower}>
              <Image source={require('../assets/images/flower.png')} />
              <Text style={styles.suggestions}>Suggestions</Text>
              <View style={styles.alishaarea}>
                <View style={styles.alisha}>
                  <Image source={require('../assets/images/alisha.png')} />
                  <Image source={require('../assets/images/alisha.png')} />
                  <Image source={require('../assets/images/alisha.png')} />
                  <Image source={require('../assets/images/alisha.png')} />
                </View>
                <View style={styles.alisha1}>
                  <Text style={styles.texting}>Alisha</Text>
                  <Text style={styles.texting}>Alisha</Text>
                  <Text style={styles.texting}>Alisha</Text>
                  <Text style={styles.texting}>Alisha</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },
  top: {
    top: 0,
    height: height * 0.192,
    backgroundColor: Colors.CYAN_COLOR,
    width: width * 0.98,
    marginVertical: 3,
    borderRadius: 16,
    elevation: 5,
    margin: 4,
  },
  scroll: {
    backgroundColor: Colors.WHITE_COLOR,
  },
  menu: {
    bottom: 1,
  },
  logoimage: {
    bottom: 400,
    flexDirection: 'row',
    margin: -15,
  },
  lavender: {
    margin: -15,
    marginHorizontal: 1,
  },
  below: {
    backgroundColor: Colors.CYAN_COLOR,
  },
  Curve: {
    bottom: 234,
    margin: -10,
  },
  Text: {
    color: Colors.WHITE_COLOR,
    fontSize: 24,
    fontFamily: 'Adobe Caslon Pro',
    width: width * 0.48,
    lineHeight: 26,
    bottom: 180,
    margin: 45,
  },
  Text1: {
    color: Colors.WHITE_COLOR,
    fontSize: 14,
    fontFamily: 'Adobe Caslon Pro',
    marginLeft: 315,
    bottom: 295,
  },
  Text2: {
    color: Colors.PINK_COLOR,
    fontSize: 14,
    fontFamily: 'Adobe Caslon Pro',
    marginLeft: 315,
    bottom: 295,
  },
  write: {
    height: height * 0.23,
    backgroundColor: Colors.WHITE_COLOR,
    width: width * 0.98,
    marginVertical: 3,
    borderRadius: 29,
    elevation: 5,
    margin: 4,
    bottom: 499,
  },
  write1: {
    color: Colors.DARKGREEN_COLOR,
    margin: 10,
    fontSize: 19,
    fontFamily: 'Century Gothic',
  },
  write2: {
    color: Colors.GREENSHADE_COLOR,
    width: width * 0.32,
    fontSize: 16,
    fontFamily: 'Century Gothic',
    alignSelf: 'center',
    margin: 15,
    opacity: 0.64,
  },
  ellipsedirect: {
    height: height * 0.077,
    width: width * 0.138,
    borderRadius: 45,
    elevation: 5,
    backgroundColor: Colors.WHITE_COLOR,
    marginHorizontal: 322,
    bottom: 43,
  },
  direct: {
    alignSelf: 'center',
    top: 12,
  },
  flower: {
    alignSelf: 'center',
    bottom: 153,
  },
  suggestions: {
    color: Colors.DARKGREEN_COLOR,
    fontSize: 19,
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    bottom: 335,
    marginHorizontal: 67,
  },
  alisha: {
    bottom: 290,
    marginLeft: 62,
    flexDirection: 'row',
  },
  alisha1: {
    flexDirection: 'row',
  },
  texting: {
    color: Colors.BLACK_COLOR,
    bottom: 277,
    fontSize: 13,
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    marginLeft: 67,
  },
});

export default Home;
