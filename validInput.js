/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var dismissKeyboard = require('dismissKeyboard');
import React, {Component} from 'react';
import {
    TextInput
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create(require("./styles"));

class ValidInput extends TextInput {
    state = {};

    validate(value) {
        if (this.props.isValid(value)) {
            const combineStyles = StyleSheet.flatten([this.props.style, this.props.styleWrong]);
            this.setNativeProps({style: combineStyles});
        }
    }

    onBlur(value) {
        validate(value);
    };

    onChange(value) {
        validate(value);
    };
}

module.exports = ValidInput;