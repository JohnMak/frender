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
    View,
    Image
} from 'react-native';
import Button from 'react-native-button';
import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create(require("../styles"));

class VerificationView extends Component {
    state = {
        isCodeRight: false,
        code: ''
    };


    onCodeChange = (code) => {

        if (code.code.length >= 5) {
            this.setState({isCodeRight: true});
            dismissKeyboard();
        }
        this.setState(code);
    };

    _handlePress() {
        this.props.navigator.push({
            id: 'profileEdit'
        })
    };

    render() {
        return (
            <View style={styles.staticBody}>
                <Image style={styles.logo}
                       source={require('./assets/logo.jpg')}
                />

                <Text style={styles.label}>Enter verification code from SMS</Text>
                <TextInput style={styles.inputCode}
                           value={this.state.code}
                           maxLength={5}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           onChangeText={(code) => this.onCodeChange({code})}
                />

                <Button
                    style={styles.common.button}
                    styleDisabled={styles.buttonDisabled}
                    disabled={!this.state.isCodeRight}
                    onPress={() => this._handlePress()}>
                    Continue
                </Button>
            </View>

        );
    }
}

module.exports = VerificationView;