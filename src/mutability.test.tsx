function increaseAge(u: UserType) {
    u.age++
}

export type UserType = {
    name: string
    age: number
}

test('big test', () => {
    let user = {
        name: 'Yura',
        hair: 33
    };


    increaseAge(user)
    expect(user.age).toBe(34)
})