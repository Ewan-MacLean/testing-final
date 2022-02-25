const Algs = require('../components/functions/functions')

it('Uppercases all characters', ()=> {
    const actualResult = Algs.uppercaseAll('is there anybody out there?')

    expect(actualResult).toBe('IS THERE ANYBODY OUT THERE?')
})

it('returns null if not a string', ()=> {
    const actualResult = Algs.uppercaseAll(33)

    expect(actualResult).toBe(null) 
})
