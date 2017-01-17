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
    TouchableHighlight,
    AsyncStorage,
    Image
} from 'react-native';
import Button from 'react-native-button';
import {Scene, Modal, Router, Actions} from 'react-native-router-flux';

const styles = require("../styles");

var _ = require('underscore');

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');
var Storage = require('../storage');

var photoPickerOptions = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class ProfileEditView extends Component {
    state = {
        fullName: '',
        nickName: '',
        isFormValid: false,
        profile: this.props.profile
    };

    _handlePress() {
        if (this.props.isRegistration) {
            Actions.listing();
        }
        else {
            Actions.pop();
        }
    };

    _openImagePicker() {
        ImagePicker.showImagePicker(photoPickerOptions, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either data...
                const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                } else {
                    const source = {uri: response.uri, isStatic: true};
                }
            }
        });
    };

    _nickNameChanged = () => {
        if (this.state.nickName.length < 5) {
            const combineStyles = StyleSheet.flatten([styles.input, styles.inputWrong]);
            this.elmNickNameInput.setNativeProps({style: combineStyles});
            this.setState({isFormValid: false});
        }
        else {
            this.elmNickNameInput.setNativeProps({style: styles.input});
            this.setState({isFormValid: true});
        }
    };

    _nickNameChange = (nickName) => {
        if (this.elmNickNameInput) {
            this.elmNickNameInput.setNativeProps({style: styles.input});
        }
        this.setState({nickName});
    };

    __updateData = () => {
        Storage.get('profile').then(function(data){
            this.setState(data);
        });
    };

    render() {
        this.__updateData();

        return (
            <ScrollView style={styles.body} initialPage={0}>
                <View style={styles.staticBody}>

                    <Text style={styles.label}>Photo</Text>
                    <TouchableHighlight
                        onPress={() => this._openImagePicker()}
                        underlayColor='rgba(0,0,0,0)'>
                        <Image style={styles.uploadAvatar} source={this.state.avatar}/>
                    </TouchableHighlight>

                    <Text style={styles.label}>Full Name</Text>

                    <TextInput style={styles.profile.input}
                               value={this.props.profile.fullName}
                               onChangeText={(fullName) => {
                                   var changes = {profile: _.extend(this.props.profile, {fullName:fullName})};
                                   this.setState(changes);
                                   this.props.onChanged(changes);
                               }}
                               maxLength={22}
                               underlineColorAndroid='rgba(0,0,0,0)'>
                    </TextInput>

                    <Text style={styles.label}>Nick Name</Text>

                    <TextInput style={styles.profile.input}
                               value={this.state.nickName}
                               onChangeText={this._nickNameChange}
                               onBlur={this._nickNameChanged}
                               ref={(input) => this.elmNickNameInput = input}
                               maxLength={22}
                               underlineColorAndroid='rgba(0,0,0,0)'>
                    </TextInput>


                    <Button
                        style={styles.common.button}
                        styleDisabled={styles.buttonDisabled}
                        disabled={!this.state.isFormValid}
                        onPress={() => this._handlePress()}>
                        Next
                    </Button>
                </View>
            </ScrollView>

        );
    }
}

module.exports = ProfileEditView;