import {UserType} from "./mutability.test";

let user = {
    name: 'Yura',
    age: 33,
    adress: 'NP'
};


function increaseAge(user: UserType) {
    user.age++
}