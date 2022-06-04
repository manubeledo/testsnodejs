import { strict as assert } from 'assert';

let arrayA = [1,2]
let arrayB = [1,3]

try {
    assert.deepEqual(arrayA, arrayB)
    console.log(true)
} catch(err) {
    console.log(false)
    console.log(err)
}

