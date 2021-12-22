function isLowerCase(str: string) {
    return str === str.toLowerCase() && str !== str.toUpperCase()
}

function isOpeningBracket(str: string) {
    return ['(', '[', '{'].indexOf(str) > -1
}

function isClosingBracket(str: string) {
    return [')', ']', '}'].indexOf(str) > -1
}

function getOpeningBracket(close: string) {
    switch (close) {
    case ')':
        return '('
    case '}':
        return '{'
    case ']':
        return '['
    }
}

function isNumber(str: string) {
    return /\d+/.test(str)
}

export function parseMolecule(formula: string) {
    const parsedFormula: string[] = []
    for (let i = 0; i < formula.length; i++) {
        const key = formula[i]
        const previous = formula[i - 1]
        if (isLowerCase(key)) {
            const last = parsedFormula[parsedFormula.length - 1]
            parsedFormula[parsedFormula.length - 1] = last + key
        } else if (isNumber(previous) && isNumber(key)) {
            parsedFormula[parsedFormula.length - 1] = previous + key
        } else {
            parsedFormula.push(key)
        }
    }

    const closingBrackets: string[] = []
    const multipliers: number[] = []
    let previousDigit = false

    return parsedFormula.reverse()
        .reduce((acc, str) => {
            if (isOpeningBracket(str)) {
                const opening = getOpeningBracket(closingBrackets[closingBrackets.length - 1])

                if (opening === str) {
                    closingBrackets.pop()
                    multipliers.pop()
                    previousDigit = false
                }
            } else if (isClosingBracket(str)) {
                closingBrackets.push(str)
                previousDigit = false
            } else if (isNumber(str)) {
                previousDigit = true
                multipliers.push(parseInt(str, 10))
            } else {
                const multiplier = 1 * multipliers.reduce((acc, m) => acc * m, 1)
                if (previousDigit) {
                    previousDigit = false
                    multipliers.pop()
                }

                acc[str] = multiplier + (acc[str] || 0)
            }
            return acc
        }, {} as Record<string, number>)
}
