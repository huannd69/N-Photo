import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {
    BallIndicator,
} from 'react-native-indicators';
import NavigationService from 'routers/NavigationService';
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        setTimeout( () => NavigationService.navigate('homeScreen'),1000)
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={{ uri: 'https://vcdn-giaitri.vnecdn.net/2019/03/17/ngoc-trinh-7-6846-1552530069-9335-1552791273.jpg' }}>
            <BallIndicator color='#B3FFFFFF' />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default SplashScreen;
