const {calculateTip} = require('../src/math')

test('should calculate tip', () => {
    const total = calculateTip(10, .3)

    expect(total).toBe(13)

    // if (total != 13){
    //     throw new Error('total tip should be 13.Got ' + total)
    // }    
})


test('async test demo', (done) => {
    setTimeout(() =>{
        expect(1).toBe(1)
        done()
    }, 2000)

    // expect(1).toBe(2)
})