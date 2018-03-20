import { parseAccountNumber, splitIntoDigits, splitByRows } from './parser'

describe('number scanner', () => {
  describe('splitByRows', () => {
    it('returns array', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      expect(splitByRows(input)).toHaveLength(3)
    })
  })

  describe.skip('splitIntoDigits', () => {
    it('gets nine digits', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      expect(splitIntoDigits(input)).toHaveLength(9)
    })
  })

  describe('parseAccountNumber', () => {
    it('can recognize zeroes', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('000000000')
    })

    it.skip('can recognize ones', () => {
      const input = [
        '                           ',
        '  |  |  |  |  |  |  |  |  |',
        '  |  |  |  |  |  |  |  |  |',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('111111111')
    })
  })
})
