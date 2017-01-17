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
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
const styles = require("../styles");
const locale = require("../localization/localization");

class searchBar extends Component {
    state = {
        searchText: locale.searchText
    };


    render() {
        return (
            <View style={styles.searchBar.body}>
                <TextInput style={styles.searchBar.input}
                           onChangeText={(searchText) => {
                               this.setState({searchText});

                               this.props.onChanged ? this.props.onChanged({searchText}): false;
                           }}
                           maxLength={22}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder={this.state.searchText}
                />
                <Image style={styles.searchBar.icon} source={require('../assets/search-icon.png')}/>
            </View>

        );
    }
}

module.exports = searchBar;