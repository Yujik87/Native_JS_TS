import {sum} from './for_test'

test('corrected sum', () => {

    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = sum(a,b)
    const result2 = sum(c,b)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})