'use strict';

const iterate = (obj, callback) => {
    const keys = Object.keys(obj);

    for (let key of keys) {
        const value = obj[key];
        callback(key, value, obj);
    }
};

module.exports = { iterate };
