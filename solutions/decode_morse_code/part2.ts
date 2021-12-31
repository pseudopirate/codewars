import { MORSE_CODE } from './preloaded'

export const getTransmitionRate = (bits: string) => {
    if (!bits.includes('0')) {
        return bits.length
    }
    const rates: number[] = []
    let currentRate = 1
    for (let i = 0; i < bits.length; i++) {
        const bit = bits[i]
        const previousBit = bits[i - 1]

        if (!previousBit) {
            continue
        }

        if (bit === previousBit) {
            currentRate++
        } else {
            rates.push(currentRate)
            currentRate = 1
        }
    }
    const minRate = Math.min(...rates)

    return isFinite(minRate) ? minRate : 0
}

const prepareMorseMap = (transmitionRate: number) => {
    const BITS_MAP: Record<string, string> = {
        1: '.',
        111: '-',
        0: '',
        '000': ' ',
        '0000000': '   '
    }
    const preparedMap = Object.keys(BITS_MAP)
        .reduce((acc, key) => {
            acc[key.repeat(transmitionRate)] = BITS_MAP[key]
            return acc
        }, {} as Record<string, string>)

    return (bitsString: string) => {
        return preparedMap[bitsString]
    }
}

export const decodeBits = (bits: string) => {
    const trimmedBits = bits.replace(/(^0+|0+$)/g, '')
    const transmitionRate = getTransmitionRate(trimmedBits)

    if (transmitionRate === 0) {
        return ''
    }

    const matchRegexp = new RegExp(`.{1,${transmitionRate}}`, 'g')
    const getMorseSymbol = prepareMorseMap(transmitionRate)

    const matchedBits = trimmedBits.match(matchRegexp) as RegExpMatchArray

    return matchedBits.reduce((acc, bits) => {
        const previous = acc[acc.length - 1]
        if (previous && previous.includes(bits)) {
            acc[acc.length - 1] = previous + bits
        } else {
            acc.push(bits)
        }
        return acc
    }, [] as string[])
        .map(getMorseSymbol)
        .join('')
}

const mapMorseWord = (morseWord: string) => morseWord
    .split(' ')
    .map((code) => MORSE_CODE[code])
    .join('')

export function decodeMorse(morseCode: string): string {
    return morseCode
        .trim()
        .split('   ')
        .map(mapMorseWord)
        .join(' ')
}
