// import duplicateString from '../components/functions/functions'
const Algs = require('../components/functions/functions')


it('duplicates a given string', ()=> {
    const actualResult = Algs.duplicateString('hello! nice to meet you. ')

    expect(actualResult).toBe('hello! nice to meet you.  hello! nice to meet you. ') 
})

it('returns null if not a string', ()=> {
    const actualResult = Algs.duplicateString(2)

    expect(actualResult).toBe(null) 
})