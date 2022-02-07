const arr = [1, 56, 790, 10, 465, 32]

//bubble sort
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}

console.log(arr)

//sort

const names =['Bob', 'Alex', '999', 'Joe', 'Юрий', '!nick']
console.log(names.sort())
console.log(arr.sort())

//compare function

const compFn = (a, b) => b-a

console.log(arr.sort((a, b) => b-a).reverse())