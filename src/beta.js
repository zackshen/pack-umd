import EventEmitter from 'eventemitter3'

export default class Alpha extends EventEmitter {
  constructor () {
    super()
    this.name = 'beta'
  }
  getName () {
    let name = this.name
    return `i'm ${name}`
  }
  print () {
    console.log('getName')
  }
}
