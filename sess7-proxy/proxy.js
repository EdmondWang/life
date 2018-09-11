let handler = {
    get: function(target, propKey, receiver) {
        return 'Hello ' + propKey;
    },
    set: function(target, propKey, value, receiver) {

    },
    has: function(target, propKey) { // propKey in recevier

    },
    apply : function(target, object, args) {

    },
    constructor: function(target, args) {

    }
};

let ap = new Proxy({}, handler);

console.log(ap.name);

