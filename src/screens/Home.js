import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

const Home = () => {
    return(
        <View style={Stylesheet.container}>
            <Text>
                Home
            </Text>
        </View>
    );
};

const styles = Stylesheet.create({ container: {} });

export default Home;