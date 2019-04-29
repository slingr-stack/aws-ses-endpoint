endpoint.encode = function (obj) {
    if (typeof obj === 'object') {
        return encodeURIComponent(JSON.stringify(obj));
    }
    return encodeURI(obj);
};
