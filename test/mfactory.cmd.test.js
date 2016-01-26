var mfactory = require('../src/mfactory')['mfactory']
var expect = require('chai').expect

describe('CMD: test mfactory', function () {

    it('call Alpha', function () {
        expect(mfactory('alpha').getName()).to.be.equal('alpha')
    })

    it('call Beta', function () {
        expect(mfactory('beta').getName()).to.be.equal("i'm beta")
    })

})
