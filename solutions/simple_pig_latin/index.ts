export const pigIt = (a : string) : string => {
    const regex = /[a-z]/gi
    return a.split(' ')
        .map((word) => {
            const letters = word.slice(1).split('')

            if (letters.length === 0) {
                if (word[0] && word[0].match(regex)) {
                    return word + 'ay'
                } else {
                    return word
                }
            }

            for (let i = letters.length - 1; i >= 0; i--) {
                const l = letters[i]
                if (l.match(regex)) {
                    letters[i] += word[0] + 'ay'
                    break
                }
            }

            return letters.join('')
        }).join(' ')
}
