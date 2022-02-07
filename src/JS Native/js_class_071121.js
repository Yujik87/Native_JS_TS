const todoListID_1 = '23ir-67nb'
const todoListID_2 = '21ir-63gb'


const todoLists = [
    {
        id: todoListID_1,
        title: 'What to leran',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
    }
]

const tasks = {
    [todoListID_1]:[
        {id: '45td', title: 'HTML', isDone: true},
        {id: '46gb', title: 'CSS', isDone: true},
        {id: '23dt', title: 'React', isDone: true},
    ],
    [todoLists[1].id]:[
        {id: '45td', title: 'Meat', isDone: true},
        {id: '46gb', title: 'Bear', isDone: true},
        {id: '23dt', title: 'Milk', isDone: true},
    ]
}

console.log(tasks[todoListID_1].filter(t => t.id !== '45td'))
console.log(tasks[todoListID_2].filter(t => t.id !== '45td'))
console.log({...tasks, [todoListID_1]: tasks[todoListID_1].filter(t => t.id !== '23dt')})
console.log({...tasks, [todoListID_2]: [...tasks[todoListID_2], {id: '27rt', title: 'Water', isDone: true}]})

// reduce

const numbers = [1, 2, 3, 4, 7, 5, 6]

console.log(numbers.reduce((acc, el)=> acc + el, 0))
console.log(numbers.reduce((acc, el)=> acc > el ? acc : el))

let students = [
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

console.log(students.reduce((acc, el) => acc + el.scores, 0))
console.log(students.reduce((acc, el) => {
    if(el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, []))

console.log(students.reduce((acc, el) => {
    if(el.name === 'Nick') {
        let copyNick = {...el, isMarried: true}
        acc.push(copyNick)
    }
    acc.push(el)
    return acc
}, []))