const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [7, 8, 9];

const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);

console.log(Math.max(...numbers1))

function sum(a, b, c) {
    return a + b+ c;
}
console.log(sum(...numbers1))

const obj1 = {
    name: "Anna",
    x: 20
}

const obj2 = {
    name:"Bob",
    y: 30
}

const newObj = {...obj1};
newObj.name = "Ann";
console.log(newObj);
console.log(obj1);

const mergedObj = {...obj1, ...obj2};
console.log(mergedObj)

function sum(a, b, ...args) {
    let result = a + b;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

const word = 'electric';
const letters = [...word];
console.log(letters)

//---------------------------------------------------------------------------------------------------------