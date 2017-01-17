/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
let dismissKeyboard = require('dismissKeyboard');
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    Navigator,
    TouchableHighlight,
    Dimensions,
    View,
    Image
} from 'react-native';
let SquareView = require('react-native-square-view');
import {Scene, Modal, Router, Actions} from 'react-native-router-flux';
let ModalBox = require('react-native-modalbox');
let SearchBar = require('./searchBar');
import {ContactsView, AddContactModal} from './contactsList.view';

const styles = require("../styles");
import Button from 'react-native-button';
const locale = require("../localization/localization");

let width = Dimensions.get('window').width;


class GroupView extends Component {
    state = {
    };

    render() {
        return (
            <ScrollView style={styles.body}>
                <View style={styles.group.heroWrapper}>
                    <Image source={this.props.avatar} style={[styles.group.heroImage, {width: width}]}/>
                    <Text style={styles.group.title}>{this.props.title}</Text>
                    <Text style={styles.group.subTitle}>#{this.props.name}</Text>
                </View>

                <ContactsView />
            </ScrollView>
        );
    }
}

module.exports = GroupView;