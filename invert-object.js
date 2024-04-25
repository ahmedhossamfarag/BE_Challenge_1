function invertObject(object)
{
    for (const key in object) {
        object[object[key]] = key
        delete object[key]
    }
    return object
}

//test
console.log(invertObject({ 'a': 1, 'b': 2, 123: true }))