/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    BackAndroid
} from 'react-native';

var RegistrationView = require("./register.view");
var VerificationView = require("./verification.view");
var ProfileEditView = require("./profileEdit.view");
var MainView = require("./main.view");
var _navigator;

const styles = require("./styles");

export default class frender extends Component {

    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{id: 'listing'}}
                renderScene={this.navigatorRenderScene} />
        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'register':
                return (<RegistrationView navigator={navigator} title={route.title} />);
            case 'verifySMS':
                return (<VerificationView navigator={navigator} title={route.title} />);
            case 'profileEdit':
                return (<ProfileEditView navigator={navigator} title={route.title} />);
            case 'listing':
                return (<MainView navigator={navigator} title={route.title} />);
        }
    }
}


BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1  ) {
        return false;
    }
    _navigator.pop();
    return true;
});



AppRegistry.registerComponent('frender', () => frender);
