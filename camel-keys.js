function camelCase(str) {
    return str.replace(/\b\w/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/[^\w]+/g, '');
}

function toCamelCaseKeys(object)
{
    if((typeof object ) != 'object') return object
    for (const key in object) {
        const nkey = camelCase(key)
        const value = toCamelCaseKeys(object[key])
        delete object[key]
        object[nkey] = value
    }
    return object
}

//test
console.table(toCamelCaseKeys({ SomeKey: 1, OtherKey: 'abc', thirdKey: { Hello: 1, World: { 'some-key': 1234, 'another key': 567 } } }))