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
import Button from 'react-native-button';
const styles = require("../styles");
var SquareView = require('react-native-square-view');

var width = Dimensions.get('window').width;
var setHeight = Math.min(width, 280);

class ListingEvent extends Component {
    state = {
        isCodeRight: false,
        code: ''
    };


    render() {
        return (
            <View style={[styles.listingEvent.container,
                {height: setHeight}]}>

                <Image style={[styles.listingEvent.bgImage,
                    {height: setHeight, width: width}]}
                       source={this.props.picture}
                       resizeMode="cover"
                />

                <View style={styles.listingEvent.topBar}>
                    <Text style={styles.listingEvent.title}>{this.props.title}</Text>
                    <Text style={styles.listingEvent.description}>{this.props.description}</Text>
                </View>

                <View style={styles.listingEvent.bottomBar}>

                    <View style={styles.listingEvent.bottomBarLeft}>
                        <Text style={styles.listingEvent.date}>{this.props.date}</Text>
                        <Text style={styles.listingEvent.time}>{this.props.time}</Text>
                    </View>

                    <View style={styles.listingEvent.bottomBarCenter}>
                        <TouchableHighlight style={styles.listingEvent.joinBtn}>
                            <Text style={styles.listingEvent.joinBtnText}>Join</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.listingEvent.bottomBarRight}>
                        <Text style={styles.listingEvent.capacity}>{this.props.capacity}</Text>
                        <Text style={styles.listingEvent.author}>by {this.props.author}</Text>
                    </View>
                </View>
            </View>

        );
    }
}

module.exports = ListingEvent;