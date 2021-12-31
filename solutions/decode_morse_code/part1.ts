import { MORSE_CODE } from './preloaded'

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
