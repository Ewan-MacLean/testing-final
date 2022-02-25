const Algs = require('../components/functions/functions')


it('reverses a given string', ()=> {
    const actualResult = Algs.reverseString('hello! nice to meet you. ')

    expect(actualResult).toBe(' .uoy teem ot ecin !olleh') 
})

it('returns null if not a string', ()=> {
    const actualResult = Algs.reverseString('')

    expect(actualResult).toBe(null) 
})