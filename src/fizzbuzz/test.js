import fizzBuzz from './index';

describe('Test Fizzbuz',()=>{
    test('It should return the same number',()=>{
        expect(fizzBuzz(1)).toBe('1');
    })

    test('It should return the same number',()=>{
        expect(fizzBuzz(2)).toBe('12');
    })

    test('It should return 3',()=>{
        expect(fizzBuzz(3)).toBe('12fizz');
    })
})
