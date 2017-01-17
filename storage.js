/**
 * Created by johnmak on 15/11/2016.
 */
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';


function Storage() {
    console.log('');

    this.set = function(key, value) {
        AsyncStorage.setItem('@frenderapp:'+key, value);
        Actions.redraw();
    };

    this.get = function(key) {
        return AsyncStorage.getItem('@frenderapp:'+key);
    }
}


module.exports = new Storage();