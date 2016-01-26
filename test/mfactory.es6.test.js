import { mfactory } from '../src/mfactory'
let chai = require('chai')
let spies = require('chai-spies')
let expect = chai.expect

chai.use(spies)

describe('ES6 test mfactory', () => {
    it('call Alpha', () => {
        expect(mfactory('alpha').getName()).to.be.equal('alpha')
    })

    it('call Beta', () => {
        expect(mfactory('beta').getName()).to.be.equal('i\'m beta')
    })

    it('beta events', () => {
        let beta = mfactory('beta')
        let eventFunc = chai.spy((e) => { console.log('beta got new a event') })
        beta.on('event', eventFunc)
        beta.emit('event')
        beta.emit('event')
        beta.emit('event')
        expect(eventFunc).to.have.been.called.exactly(3)
    })
})
