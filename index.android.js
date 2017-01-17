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

var MainView = require("./main.view");

export default class frender extends Component {

    render() {
        return (
            <MainView/>
        );
    }
}


AppRegistry.registerComponent('frender', () => frender);
