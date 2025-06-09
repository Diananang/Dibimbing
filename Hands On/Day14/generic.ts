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

interface IPerson{
    name: string,
    age: number
}

interface IAddress{
    city: string,
    address: string
}

const person: IPerson = { name: "Alice", age: 30 };
const address: IAddress = { city: "New York", address: "Bronx" };

function mergeObjectData <T, U> (object1: T, object2: U): T & U{
    return {...object1, ...object2};
}

console.log (mergeObjectData <IPerson, IAddress> (person, address));