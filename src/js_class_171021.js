const yo = "yo!!!"

const bob = {
    name: "Bob",
    age: 23,
    isStudent: true,
    friends: ["Ann", "Dimon"]
}

const alex = bob
alex.name = "Alex"

console.log(bob)

const a = {}
const b = {}

console.log(a === b)

// const bobKeys = Object.keys(bob)
// console.log(bobKeys)

// for (let i = 0; i < bobKeys.length; i++) {
//     copyBob[bobKeys[i]] = bob[bobKeys[i]]
// }

// const copyBob = {...bob}
const copyBob = {...bob, friends: [...bob.friends]}
console.log(copyBob)
console.log(copyBob === bob)

copyBob.name = "Bob"
console.log(copyBob)
console.log(bob)

bob.friends.push("Helga")
console.log(copyBob)
console.log(bob)
console.log(bob.friends === copyBob.friends)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]
// const stToString = st => `Hi! I'm ${st.name}. I have ${st.scores}`

// function stToString(st) {
//     return `Hi! I'm ${st.name}. I have ${st.scores}`
// }

const strings = students.map(st => `Hi! I'm ${st.name}. I have ${st.scores}`)
console.log(strings)

const copyStudents = students.map(st => ({...st}))

//------------------------------------------------------------------------24/10/21-----------------------------
