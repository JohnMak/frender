import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
    "en-US":{
        sidebar: {
            hi: "Hi",
            friends: "Friends",
            events: "Events",
            groups: "Groups",
            want: "Want meet friends?",
            create: "Create Event"
        },
        contacts: {
            addFriend: "Add Friend"
        },
        groups: {
            createGroup: "Create Group",
            membersCount: "members"
        },
        searchText: "Search..."
    },

    "ru-RU":{
        sidebar: {
            hi: "Привет",
            friends: "Друзья",
            events: "Встречи",
            groups: "Группы",
            want: "Хочешь увидется с друзьями?",
            create: "Создать встречу"
        },
        contacts: {
            addFriend: "Добавить друга"
        },
        groups: {
            createGroup: "Создать группу",
            membersCount: "подписчиков"
        },
        searchText: "Найти..."
    }
});


module.exports = strings;