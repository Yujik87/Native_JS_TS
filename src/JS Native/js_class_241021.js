const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getName = st => ({name: st.name})
const names = students.map(getName)
console.log(names)

function map(array, fn) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = fn(array[i])
    }
    return result
}

console.log(map(students, getName))






console.log(students.filter(st => st.age >= 21))

function filter(array, fn) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

console.log(filter(students, st => st.age >= 21))






console.log(students.find(st => st.name === 'Bob'))

function find(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if(fn(array[i]))
            return array[i]
    }
}

console.log(find(students, st => st.name === 'Bob'))






console.log(students.map(st => st))   //[...students]

console.log(students.map(st => ({...st, isStudent: true})))






console.log(students.map(st => {
    if (st.name === 'Nick') {
        return {...st, isMarried: true}
    } else {
        return st
    }
}))

console.log(students.map(st => st.name === 'Nick' ? {...st, isMarried: true} : st))