import { expect } from 'chai'
import { parseMolecule } from '.'

describe('parseMolecule', function() {
    it('should parse water', () => {
        expect(parseMolecule('H2O')).to.deep.equal({ H: 2, O: 1 })
    })

    it('should parse MgO2', () => {
        expect(parseMolecule('MgO2')).to.deep.equal({ O: 2, Mg: 1 })
    })

    it('should parse magnesium hydroxide: Mg(OH)2', () => {
        expect(parseMolecule('Mg(OH)2')).to.deep.equal({ Mg: 1, O: 2, H: 2 })
    })

    it("should parse Fremy's salt: K4[ON(SO3)2]2", () => {
        expect(parseMolecule('K4[ON(SO3)2]2')).to.deep.equal({ K: 4, O: 14, N: 2, S: 4 })
    })
})
