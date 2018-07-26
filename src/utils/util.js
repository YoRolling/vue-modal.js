const func = Object.prototype.toString;
export function isString(obj) {
    return func.call(obj) === '[object String]';
}

export function isObject(obj) {
    return func.call(obj) === '[object Object]';
}

export function isArray(obj) {
    return func.call(obj) === '[object Array]';
}
