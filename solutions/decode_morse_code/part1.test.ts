import { decodeMorse } from './part1'
import { assert } from 'chai'

const Test = {
    expect: (...args: any[]) => (assert as any)(...args),
    assertEquals: (...args: any[]) => (assert as any).equal(...args)
}

describe('decode_morse_code part1', function() {
    it('HEY JUDE', () => {
        Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
    })
})

describe('decode_morse_code part1 own', function() {
    it('Something', () => {
    // your tests
    })
})
