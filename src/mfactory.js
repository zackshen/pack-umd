import {alpha as Alpha} from './alpha'
import Beta from './beta'

export default function mfactory (name) {
    let m
    switch (name) {
    case 'alpha':
        m = new Alpha()
        break
    case 'beta':
        m = new Beta()
        break
    }
    if (!m) {
        throw new Error('module does not exists.')
    }
    return m
}
