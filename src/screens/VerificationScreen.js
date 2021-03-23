import React from'react';
import {View,Text,StyleSheet } from 'react-native';

const SignUp = (props) => {
    let  myName=props.route.params.name
    return(
      <View style={styles.container}>
         <Text>myName</Text>
      </View>

    );

};
const styles= StyleSheet.create({
    container: {},
});
export default SignUp;
