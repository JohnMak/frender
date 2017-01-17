/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var dismissKeyboard = require('dismissKeyboard');
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    View,
    Image
} from 'react-native';
import Button from 'react-native-button';
import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create(require("../styles"));

class RegisterView extends Component {
    state = {
        readySendSMS: false,
        phone: '+7-('
    };

    formatPhone = (phoneText) => {
        var clearNumbers = phoneText.replace(/[^0-9]/g, '');

        var lengthDiff = phoneText.length - this.state.phone.length;
        if (lengthDiff < 0) {
            clearNumbers = this.state.phone.replace(/[\+\-\(\)]/g, '');
            clearNumbers = clearNumbers.substring(0, clearNumbers.length + lengthDiff);
        }

        var output = `+7-(${clearNumbers.substring(1, 4)}`;
        if (clearNumbers.length > 3) {
            output += `)-${clearNumbers.substring(4, 7)}`
        }
        if (clearNumbers.length > 6) {
            output += `-${clearNumbers.substring(7, 9)}`
        }
        if (clearNumbers.length > 8) {
            output += `-${clearNumbers.substring(9, 15)}`
        }
        if (clearNumbers.length > 10) {
            this.setState({readySendSMS: true});
        }
        else {
            this.setState({readySendSMS: false});
        }
        if (clearNumbers.length == 11) {
            dismissKeyboard();
        }
        return output;
    };

    onPhoneChange = (phone) => {
        var formatted = this.formatPhone(phone);
        this.setState({phone: formatted});
    };

    onPhoneChanged = () => {
        var clearNumbers = this.state.phone.replace(/[^0-9]/g, '');
        if (clearNumbers.length < 10) {
            const combineStyles = StyleSheet.flatten([styles.input, styles.inputWrong]);
            this.textInput.setNativeProps({style: combineStyles});
        }
        else {
            this.textInput.setNativeProps({style: styles.input});
        }
    };

    _handlePress() {
        this.props.navigator.push({
            id: 'verifySMS'
        })
    };

    render() {
        return (
            <View style={styles.staticBody}>
                <Image style={styles.logo}
                       source={require('./assets/logo.jpg')}
                />
                <Text style={styles.label}>Please enter your phone number</Text>

                <TextInput style={styles.common.input}
                           value={this.state.phone}
                           onChangeText={this.onPhoneChange}
                           onBlur={this.onPhoneChanged}
                           keyboardType="phone-pad"
                           multiline={true}
                           ref={(input) => this.textInput = input}
                           maxLength={22}
                           underlineColorAndroid='rgba(0,0,0,0)'>
                </TextInput>

                <Button
                    style={styles.common.button}
                    styleDisabled={styles.buttonDisabled}
                    disabled={!this.state.readySendSMS}
                    onPress={() => this._handlePress()}>
                    Next
                </Button>
            </View>
        );
    }
}

module.exports = RegisterView;