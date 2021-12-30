import { assert } from 'chai'

import { pigIt } from '.'

describe('simple_pig_latin', () => {
    it('test', () => {
        assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
        assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay')
        assert.strictEqual(pigIt('Pig latin is cool!!'), 'igPay atinlay siay oolcay!!')
        assert.strictEqual(pigIt('O tempora o mores !'), 'Oay emporatay oay oresmay !')
    })
})
