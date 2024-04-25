function zipArrays()
{
    const arrays = [...arguments]
    const res = []
    const max = Math.max(...arrays.map(a => a.length))
    for (let i = 0; i < max; i++) {
        res.push(arrays.map(a => i < a.length ? a[i] : null))
    }
    return res
}

//test
console.table(zipArrays([1, 2, 3, 4], ['a', 'b', 'c', 'd'], ['x', 'y', 'z']))