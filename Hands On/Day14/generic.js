"use strict";
/**
 * Merges two objects of any type into a single object using generic funciton
 *
 * @example
 *
 * Input:
 * const person = { name: "Alice", age: 30 };
 * const address = { city: "New York", address: "Bronx" };
 *
 * Output: { name: "Alice", age: 30, city: "New York", address: "Bronx" }
 */
const person = { name: "Alice", age: 30 };
const address = { city: "New York", address: "Bronx" };
function mergeObjectData(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(mergeObjectData(person, address));
