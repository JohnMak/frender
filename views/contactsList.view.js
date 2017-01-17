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
    Navigator,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
var SquareView = require('react-native-square-view');
import {Scene, Modal, Router, Actions} from 'react-native-router-flux';
var ModalBox = require('react-native-modalbox');
let SearchBar = require('./searchBar');


var Data = {
    contacts: [
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.85',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.81',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.82',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.83',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.84',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.75',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.71',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.72',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.73',
            status: 'Friend, Best friend'
        },
        {
            fullname: 'John Deere',
            avatar: require('../assets/no-avatar.png'),
            nickname: 'john.deere.74',
            status: 'Friend, Best friend'
        }
    ]

};

const styles = require("../styles");
import Button from 'react-native-button';
const locale = require("../localization/localization");


class ContactItem extends Component {
    state = {};


    render() {
        return (
            <View style={styles.contacts.contactItem}>

                <Image source={this.props.contact.avatar} style={styles.contacts.contactItemAvatar}/>

                <View style={styles.contacts.contactItemInfobox}>
                    <Text style={styles.contacts.contactItemName}>{this.props.contact.fullname}</Text>
                    <Text style={styles.contacts.contactItemStatus}>{this.props.contact.status}</Text>
                </View>
            </View>

        );
    }
}

class ContactsView extends Component {
    state = {};


    render() {
        var rows = [];
        for (var contact in Data.contacts) {
            contact = Data.contacts[contact];
            rows.push(<ContactItem key={contact.nickname} contact={contact}/>);
        }


        return (
            <ScrollView style={styles.body}>
                <SearchBar></SearchBar>

                <View style={styles.common.body}>

                    <Button style={styles.contacts.button} onPress={() => {
                        console.log(Actions);
                        Actions.contactsAddContactModal();
                    }}> {locale.contacts.addFriend} </Button>

                    <View style={styles.contacts.body}>
                        {rows}
                    </View>

                </View>
            </ScrollView>
        );
    }
}
class AddContactModal extends Component {

    // show or hide Modal based on 'hide' prop
    render() {
        return (
            <ModalBox isOpen={true} style={styles.common.modal} animationDuration={200} backButtonClose={true}
                      onClosed={() => {
                          Actions.pop();
                      }}>
                <Text key="modal" style={styles.text}>Hello</Text>
            </ModalBox>
        )
    }
}

module.exports = {ContactsView, AddContactModal};