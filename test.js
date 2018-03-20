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

    it('returns array of strings', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitByRows(input)
      rows.map(row => expect(typeof row).toBe('string'))
    })

    it('returns strings of length of row', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitByRows(input)
      rows.map(row => expect(row).toHaveLength(27))
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
