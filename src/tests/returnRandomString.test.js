const Algs = require('../components/functions/functions')

it('returns a random string of 20 characters', ()=> {
    const actualResult = Algs.returnRandomString()

    expect(typeof actualResult).toBe('string')
})

it('returns a random string of 20 characters', ()=> {
    const actualResult = Algs.returnRandomString()

    expect(actualResult.length).toBe(20)
})
