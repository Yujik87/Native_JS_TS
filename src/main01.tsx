import {UserType} from "./mutability.test";
import {types} from "util";

let user = {
    name: 'Yura',
    age: 33,
    adress: 'NP'
};


function increaseAge(user: UserType) {
    user.age++
}

console.log(typeof user)