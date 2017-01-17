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
    TextInput,
    ScrollView,
    TouchableHighlight,
    View,
    Image,
    Navigator,
    AsyncStorage,
    BackAndroid
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'

const styles = require("../styles");
const locale = require("../localization/localization");


class MainView extends Component {
    state = {
        avatar: require('../assets/no-avatar.png')
    };

    render() {
        // this.setState({avatar: });

        return (
            <View style={styles.sidebar.body}>
                <TouchableHighlight style={styles.sidebar.greeting} onPress={()=> { Actions.profile() }}>
                    <View>
                        <Image style={styles.sidebar.greetingAvatar} source={this.props.profile.avatar}/>
                        <Text style={styles.sidebar.greetingText}>{locale.sidebar.hi}, {this.props.profile.fullName.get()}!</Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.sidebar.menu}>
                    <TouchableHighlight style={[styles.sidebar.menuItem, styles.sidebar.menuItemActive]} onPress={()=>{ Actions.listing()}}>
                        <Text style={[styles.sidebar.menuItemText, styles.sidebar.menuItemActiveText]}>{locale.sidebar.events}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.sidebar.menuItem]} onPress={()=>{ Actions.groupsMain() }}>
                        <Text style={[styles.sidebar.menuItemText]}>{locale.sidebar.groups}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.sidebar.menuItem]} onPress={()=>{ Actions.contactsMain() }}>
                        <Text style={[styles.sidebar.menuItemText]}>{locale.sidebar.friends}</Text>
                    </TouchableHighlight>
                </View>

                <View style={[styles.agenda.body, {flexDirection: 'column', justifyContent: 'flex-end'}]}>
                    <Text style={styles.agenda.agendaText}>{locale.sidebar.want}</Text>
                    <Button style={[styles.agenda.agendaBtn, {fontSize: 18}]}>{locale.sidebar.create}</Button>
                </View>
            </View>);
    }
}


module.exports = MainView;