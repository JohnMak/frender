/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const dismissKeyboard = require('dismissKeyboard');
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
    BackAndroid
} from 'react-native';
import {Scene, Modal, Router, Actions} from 'react-native-router-flux';
import Sidebar from 'react-native-sidebar';
const storage = require('./storage'),
    Datom = require('./datom');


/**
 * IMPORTING SCENES
 */
import {ContactsView, AddContactModal} from './views/contactsList.view';
import {GroupsView, CreateGroupModal} from './views/groupsList.view';
let GroupView = require('./views/group.view');
const ListingView       = require('./views/listing.view'),
    RegistrationView    = require("./views/register.view"),
    VerificationView    = require("./views/verification.view"),
    ProfileEditView     = require("./views/profileEdit.view"),
    LeftSideBar         = require('./views/sidebar');

/**
 * IMPORTING STYLES
 */
const styles = require("./styles");

class MainView extends Component {
    state = {
        profile: {
            avatar: require('./assets/no-avatar.png'),
            fullName: new Datom('Guest')
        }
    };

    constructor() {
        super();
    }

    onBack() {
        if (this.refs.sidebar && this.refs.sidebar.state.open) {
            this.refs.sidebar.close();
            return true;
        }
        else {
            try {
                Actions.pop();
            }
            catch (e) {
                return false;
            }
        }
        return true;
    }

    onRouteEvent(e) {
        switch (e.type) {
            case 'REACT_NATIVE_ROUTER_FLUX_FOCUS':
            case 'REACT_NATIVE_ROUTER_FLUX_PUSH':
                if (this.refs.sidebar) {
                    this.refs.sidebar.close();
                    return true;
                }
                break;
        }
    };

    render() {
        return (
                <Sidebar
                    ref="sidebar"
                    leftSidebar={<LeftSideBar profile={this.state.profile}/>}
                    style={{flex: 1}}>
                    <Router
                        backAndroidHandler={(e) => { return this.onBack(e); }}
                        dispatch={(e)=> { this.onRouteEvent(e) }}>

                        <Scene key="root" hideNavBar={true}>
                            <Scene key="listing" component={ListingView}/>

                            <Scene key="contactsMain" component={ContactsView}/>
                            <Scene key="contactsAddContactModal" component={AddContactModal}/>

                            <Scene key="groupsMain" component={GroupsView} initial={true}/>
                            <Scene key="groupsCreateModal" component={CreateGroupModal}/>
                            <Scene key="group" component={GroupView}/>

                            <Scene key="registration">
                                <Scene key="registrationPhone" component={RegistrationView}/>
                                <Scene key="registrationVerification" component={VerificationView}/>
                            </Scene>
                            <Scene key="profile" isRegistration={true} component={ProfileEditView} profile/>
                        </Scene>

                    </Router>
                </Sidebar>

        );
    };
}


module.exports = MainView;