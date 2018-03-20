import { parseAccountNumber, splitIntoDigits, splitByRows } from './parser'

describe('number scanner', () => {
  describe('splitByRows', () => {
    it('returns array', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitByRows(1, input)
      expect(rows).toHaveProperty('length')
      expect(typeof rows).not.toBe('string')
    })

    it('returns array of strings', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitByRows(1, input)
      rows.map(row => expect(typeof row).toBe('string'))
    })

    it('returns strings of length 27', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitByRows(27, input)
      rows.map(row => expect(row).toHaveLength(27))
    })

    it('returns strings of length 3', () => {
      const input = ' _  _  _  _  _  _  _  _  _ '

      const rows = splitByRows(3, input)
      rows.map(row => expect(row).toHaveLength(3))
    })

    it('returns array of input characters divided by length passed in', () => {
      const input = ' _  _  _  _  _  _  _  _  _ '

      expect(splitByRows(3, input)).toHaveLength(9)
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
