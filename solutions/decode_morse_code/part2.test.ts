import { decodeBits, decodeMorse, getTransmitionRate } from './part2'
import { assert } from 'chai'

const Test = {
    assertEquals: (...args: any[]) => (assert as any).equal(...args)
}
const bits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
const bitOne = '010101010001000111010111011100000001011101110111000101011100011101010001000'
describe('decode_morse_code part2', () => {
    it('decodeBits', () => {
        Test.assertEquals(decodeBits(bits), '.... . -.--   .--- ..- -.. .')
    })

    it('getTransmitionRate', () => {
        Test.assertEquals(getTransmitionRate(bits), 2)
    })

    it('Example from description', () => {
        Test.assertEquals(decodeMorse(decodeBits(bits)), 'HEY JUDE')
    })
    it('bits with length 1', () => {
        Test.assertEquals(decodeMorse(decodeBits(bitOne)), 'HEY JUDE')
    })

    it('sholud equal E', () => {
        Test.assertEquals(decodeMorse(decodeBits('0000001000')), 'E')
        Test.assertEquals(decodeMorse(decodeBits('1')), 'E')
        Test.assertEquals(decodeMorse(decodeBits('1000')), 'E')
    })
})
