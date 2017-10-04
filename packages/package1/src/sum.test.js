const sum = require('./sum')
describe('<package1> - sum ', () => {
    it('Should sum', () => {
        expect(sum(1, 1)).toEqual(2)
    })
})