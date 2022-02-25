const Algs = require('../components/functions/functions')


it('returns number of vowels', ()=> {
    const actualResult = Algs.countVowels('spiderman')

    expect(actualResult).toBe(3) 
})

it('returns null if not a string', ()=> {
    const actualResult = Algs.countVowels(2)

    expect(actualResult).toBe(null) 
})