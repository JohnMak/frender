function datom(value = 'no value') {
    let subscribers = [];

    this.set = function(newValue) {
        value = newValue;
        subscribers.each(function (callback) {
            callback.call(value);
        })
    };

    this.get = function() {
        return value;
    };

    this.on = function(callback) {
        subscribers.push(callback);
    }

}

module.exports = datom;