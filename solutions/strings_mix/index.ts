type Letters = Record<string, number>

function prepareLowerCase(str: string) {
    const letters = str.split('').reduce((acc, s) => {
        if (s.match(/[a-z]/)) {
            acc[s] = acc[s] ? acc[s] + 1 : 1
        }

        return acc
    }, {} as Letters)

    return Object.keys(letters)
        .filter((l) => letters[l] > 1)
        .reduce((acc, l) => {
            acc[l] = letters[l]
            return acc
        }, {} as Letters)
}

function repeat(str: string, count: number) {
    return Array(count + 1).join(str)
}

export class G964 {
    public static mix = (s1: string, s2: string) => {
        const letters1 = prepareLowerCase(s1)
        const letters2 = prepareLowerCase(s2)

        const result1 = Object.keys(letters1)
            .reduce((acc, l) => {
                const l1 = letters1[l]
                const l2 = letters2[l]
                if (!l2) {
                    acc.push(`1:${repeat(l, l1)}`)
                } else if (l1 === l2) {
                    acc.push(`=:${repeat(l, l1)}`)
                } else if (l1 > l2) {
                    acc.push(`1:${repeat(l, l1)}`)
                } else {
                    acc.push(`2:${repeat(l, l2)}`)
                }
                return acc
            }, [] as string[])
        return Object.keys(letters2)
            .reduce((acc, l) => {
                if (!(l in letters1)) {
                    acc.push(`2:${repeat(l, letters2[l])}`)
                }
                return acc
            }, result1)
            .sort((a, b) => {
                if (a.length !== b.length) {
                    return b.length - a.length
                }
                if (a < b) {
                    return -1
                } else if (b > a) {
                    return 1
                }

                return 0
            })
            .join('/')
    }
}
