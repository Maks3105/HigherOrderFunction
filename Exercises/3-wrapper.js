'use strict';

const contract = (fn, ...types) => (...args) => {
    for (let i = 0; i < args.length; i++) {
        const type = types[i].name.toLowerCase();
        const arg = args[i];

        if (type !== typeof arg) {
            throw new TypeError(`Argument type ${type} expected`);
        }
    }

    const res = fn(...args);
    const typeRes = types.pop().name.toLowerCase();

    if (typeof res !== typeRes) {
        console.log(res)
        throw new TypeError(`Result type ${typeRes} expected`);
    }

    return res;
    
};

module.exports = { contract };
