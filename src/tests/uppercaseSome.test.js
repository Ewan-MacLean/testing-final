const Algs = require('../components/functions/functions')


it('capitalizes random characters', ()=> {
    const actualResult = Algs.uppercaseSome('hamburgers')

    expect(actualResult.length).toBe(10) 
})

it('returns null if empty string', ()=> {
    const actualResult = Algs.uppercaseSome('')

    expect(actualResult).toBe(null) 
})
