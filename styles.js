/**
 * Created by johnmak on 02/11/2016.
 */
let _ = require('underscore');

let CLR_WHITE = '#fff';
let CLR_DARK_BLUE = '#39649b';
let CLR_GRAY = '#ccc';
let CLR_BLACK = '#000';

let common = {
    input: {
        width: 250,
        height: 60,
        borderRadius: 5,
        borderColor: "#eee",
        borderWidth: 2,
        padding: 20,
        paddingBottom: 0,
        paddingTop: 0,
        fontWeight: "600",
        fontSize: 24
    },

    button: {
        backgroundColor: CLR_DARK_BLUE,
        borderRadius: 10,
        padding: 15,
        paddingLeft: 40,
        paddingRight: 40,
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },

    body: {
        backgroundColor: "#fff",
        flex: 1,
        marginTop: 30,
        marginBottom: 30
    },

    modal: {
        backgroundColor: "#fff",
        padding: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        borderRadius: 5,
        width: 300
    }
};

let profile = {
  input: [common.input, {
      textAlign: 'center'
  }]
};

let contacts = {

    body: {
        paddingLeft: 24,
        paddingRight: 24,
    },

    contactItem: {
        borderBottomWidth: 1,
        borderBottomColor: CLR_GRAY,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    contactItemAvatar: {
        borderRadius: 200,
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10
    },

    contactItemInfobox: {

    },

    contactItemName: {
        fontSize: 18,
        fontWeight: '700',
        color: CLR_DARK_BLUE
    },

    contactItemStatus: {},

    button: [common.button, {
        alignSelf: 'center',
        marginBottom: 20
    }]

};

let groups = {

    body: {
        paddingLeft: 24,
        paddingRight: 24,
    },

    item: {
        borderBottomWidth: 1,
        borderBottomColor: CLR_GRAY,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemAvatar: {
        borderRadius: 10,
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10
    },

    itemInfobox: {
    },

    itemName: {
        fontSize: 18,
        fontWeight: '700',
        color: CLR_DARK_BLUE
    },

    itemStatus: {},

    button: [common.button, {
        alignSelf: 'center',
        marginBottom: 20
    }]

};

let group = {
    heroWrapper: {
        height: 200,
        position: 'relative',
        backgroundColor: CLR_BLACK,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    heroImage: {
        resizeMode: 'cover',
        height: 200,
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.5
    },

    title: {
        marginTop: 60,
        marginBottom: 10,
        fontSize: 27,
        fontWeight: '700',
        color: CLR_WHITE
    },

    subTitle: {
        fontSize: 14,
        fontWeight: '200',
        color: CLR_WHITE
    }
};

let searchBar = {
    body: {
        borderRadius: 5,
        borderColor: "#eee",
        borderWidth: 1,
        margin: 5,
        marginBottom: 0,
        flex: 1,
        flexDirection: 'row',
        height: 45,
        alignItems: 'center'
    },

    input: {
        height: 45,
        padding: 15,
        paddingBottom: 0,
        paddingTop: 0,
        fontSize: 18,
        flexGrow: 1
    },

    icon: {
        height: 20,
        width: 20,
        resizeMode: 'cover',
        marginRight: 10
    }
};

let sidebar = {
    body: {
        alignSelf: 'stretch',
        backgroundColor: "#eee",
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 24,
        paddingRight: 24,
        flex: 1,
        justifyContent: 'space-between'
    },
    greeting: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    greetingText: {
        fontSize: 18,
        marginLeft: 12,
        paddingBottom: 3
    },
    greetingAvatar: {
        borderRadius: 200,
        width: 50,
        height: 50,
        resizeMode: 'cover'
    },

    menu: {
        marginTop: 50,
        flex: 1
    },

    menuItem: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingTop: 10,
        paddingBottom: 10
    },

    menuItemActive: {},

    menuItemText: {
        fontSize: 18,
        color: "#777"
    },

    menuItemActiveText: {
        fontWeight: '600',
        color: CLR_DARK_BLUE
    },
};

let listingEvent = {
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bgImage: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        zIndex: 0,
        resizeMode: 'contain',
    },

    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10
    },

    description: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },

    topBar: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 20,
        paddingBottom: 20,
        position: 'absolute',
        zIndex: 1,
    },

    bottomBar: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        position: 'absolute',
        zIndex: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    date: {
        color: '#fff',
        fontSize: 12,
    },

    time: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },

    author: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'right'
    },

    capacity: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'right'
    },

    joinBtn: {
        alignSelf: 'center'
    },

    joinBtnText: {
        color: "#fff",
        fontSize: 18,
        lineHeight: 18,
        fontWeight: '600',
        borderColor: '#fff',
        textAlign: 'center',
        borderWidth: 3,
        borderRadius: 5,
        paddingTop: 6,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
    },

    bottomBarLeft: {
        flex: 1
    },

    bottomBarCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    bottomBarRight: {
        flex: 1
    }
};

let agenda = {
    body: {
        flex: 1,
        flexDirection: 'column',
    },

    agendaText: {
        color: '#555',
        textAlign: 'center',
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5,
    },

    agendaBtn: [common.button, {
        alignSelf: 'center',
    }]
};

let listing = {
    listingGroupHeader: {
        color: CLR_GRAY,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
};

module.exports = {
    body: {
        backgroundColor: '#fff'
    },

    staticBody: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column'
    },

    label: {
        fontWeight: '600',
        marginBottom: 5,
        marginTop: 20
    },

    logo: {
        resizeMode: 'contain',
        width: 200,
    },

    inputWrong: {
        borderColor: 'red'
    },

    inputCode: _.extend({}, common.input, {
        textAlign: 'center'

    }),

    buttonDisabled: {
        backgroundColor: '#eee',
    },

    uploadAvatar: {
        borderRadius: 200,
        width: 200,
        height: 200,
        resizeMode: 'cover'
    },

    common,

    listingEvent,

    listing,

    sidebar,

    searchBar,

    agenda,

    contacts,

    groups,

    group,

    profile
};