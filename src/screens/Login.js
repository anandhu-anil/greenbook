import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

const Login = () => {
    return(
        <View style={Stylesheet.container}>
            <Text>
                Login
            </Text>
        </View>
    );
};

const styles = Stylesheet.create({ container: {} });

export default Login;