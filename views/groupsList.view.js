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
    View,
    Image
} from 'react-native';
let SquareView = require('react-native-square-view');
import {Scene, Modal, Router, Actions} from 'react-native-router-flux';
let ModalBox = require('react-native-modalbox');
let SearchBar = require('./searchBar');

let Data = {
    groups: [
        {
            name: "auto24",
            title: "Auto Shop 24/7",
            avatar: require('../assets/group-sample.jpg'),
            membersCount: 45
        },
        {
            name: "auto2",
            title: "Auto Shop 24/7",
            avatar: require('../assets/no-avatar.png'),
            membersCount: 45
        },
        {
            name: "academSport",
            title: "Auto Shop 24/7",
            avatar: require('../assets/no-avatar.png'),
            membersCount: 45
        },
        {
            name: "fitme",
            title: "Auto Shop 24/7",
            avatar: require('../assets/no-avatar.png'),
            membersCount: 45
        },
        {
            name: "nastolki",
            title: "Auto Shop 24/7",
            avatar: require('../assets/no-avatar.png'),
            membersCount: 45
        },
        {
            name: "kvn-nsu",
            title: "Auto Shop 24/7",
            avatar: require('../assets/no-avatar.png'),
            membersCount: 45
        }
    ]

};

const styles = require("../styles");
import Button from 'react-native-button';
const locale = require("../localization/localization");


class GroupItem extends Component {
    state = {};

    render() {
        return (
            <TouchableHighlight onPress={()=>{ Actions.group(this.props.group) }}>
                <View style={styles.groups.item}>
                    <Image source={this.props.group.avatar} style={styles.groups.itemAvatar}/>

                    <View style={styles.groups.itemInfobox}>
                        <Text style={styles.groups.itemName}>{this.props.group.title}</Text>
                        <Text style={styles.groups.itemStatus}>#{this.props.group.name}
                            – {this.props.group.membersCount} {locale.groups.membersCount}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

class GroupsView extends Component {
    state = {};

    render() {
        let rows = [];
        for (let group in Data.groups) {
            group = Data.groups[group];
            rows.push(<GroupItem key={group.name} group={group}/>);
        }

        return (
            <ScrollView style={styles.body}>
                <SearchBar/>

                <View style={styles.common.body}>

                    <Button style={styles.groups.button} onPress={() => {
                        console.log(Actions);
                        Actions.groupsCreateModal();
                    }}> {locale.groups.createGroup} </Button>

                    <View style={styles.groups.body}>
                        {rows}
                    </View>

                </View>
            </ScrollView>
        );
    }
}
class CreateGroupModal extends Component {

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

module.exports = {GroupsView, CreateGroupModal};