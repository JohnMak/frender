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
    TouchableHighlight,
    View,
    Image
} from 'react-native';
var SquareView = require('react-native-square-view');

var Data = {
    Events: [
        {
            key: 1,
            title: "Bicycle Trip",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit," +
            "vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
            "elit tincidunt id.",
            picture: require('../assets/event-sample-image.jpg'),
            date: "21 October, Friday",
            time: "18:00",
            capacity: "8/15",
            author: "tim.alexeev89"
        },
        {
            key: 2,
            title: "Yoga Party",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit," +
            "vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
            "elit tincidunt id.",
            picture: require('../assets/event-sample-image-2.jpg'),
            date: "21 October, Friday",
            time: "7:30",
            capacity: "2/8",
            author: "tim.alexeev89"
        },
        {
            key: 3,
            title: "Bicycle Trip",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit," +
            "vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
            "elit tincidunt id.",
            picture: require('../assets/event-sample-image.jpg'),
            date: "21 October, Friday",
            time: "18:00",
            capacity: "8/15",
            author: "tim.alexeev89"
        },
        {
            key: 4,
            title: "Yoga Party",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit," +
            "vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
            "elit tincidunt id.",
            picture: require('../assets/event-sample-image-2.jpg'),
            date: "21 October, Friday",
            time: "7:30",
            capacity: "2/8",
            author: "tim.alexeev89"
        },
    ]
};

const styles = require("../styles");
import Button from 'react-native-button';
var ListingEvent = require('./listing-event');

class ListingView extends Component {
    state = {};


    render() {
        var rows = [];
        for (var event in Data.Events) {
                event = Data.Events[event];
                rows.push(<ListingEvent key={event.key} title={event.title}
                                        description={event.description}
                                        picture={event.picture}
                                        date={event.date} time={event.time}
                                        capacity={event.capacity}
                                        author={event.author}/>)
        }

        return (
            <ScrollView style={{flex: 1}}>
                <View style={[styles.agenda.body, {
                    marginTop: 10,
                    marginBottom: 30,
                }]}>
                    <Text style={styles.agenda.agendaText}>Wanna meet friends?</Text>
                    <Button style={styles.agenda.agendaBtn} onPress={()=>{
                        this.props.navigator.push({id: 'contacts'});
                    }}>Create an Event!</Button>
                </View>
                {rows}
            </ScrollView>

        );
    }
}


module.exports = ListingView;