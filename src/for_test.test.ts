import {splitIntoWords, sum} from './for_test'

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('corrected sum', () => {
    const result1 = sum(a,b)
    const result2 = sum(c,b)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('slpitted words', () => {
    const sent1 = 'Hello my friends!'
    const sent2 = 'JS - the best programming language'
    const result3 = splitIntoWords(sent1)
    const result4 = splitIntoWords(sent2)

    expect(result3.length).toBe(3)
    expect(result4.length).toBe(5)
    expect(result3[0]).toBe('hello')
    expect(result3[1]).toBe('my')
    expect(result3[2]).toBe('friends')
    expect(result4[0]).toBe('js')
    expect(result4[1]).toBe('the')
    expect(result4[2]).toBe('best')
    expect(result4[3]).toBe('programming')
    expect(result4[4]).toBe('language')

})