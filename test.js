import {
  parseSingleNumber,
  parseAccountNumber,
  splitIntoDigits,
  splitIntoChunks,
} from './parser'
import { _0, _1 } from './utils'

describe('number scanner', () => {
  describe('splitIntoChunks', () => {
    it('returns array', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitIntoChunks(1, input)
      expect(rows).toHaveProperty('length')
      expect(typeof rows).not.toBe('string')
    })

    it('returns array of strings', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitIntoChunks(1, input)
      rows.map(row => expect(typeof row).toBe('string'))
    })

    it('returns strings of length 27', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const rows = splitIntoChunks(27, input)
      rows.map(row => expect(row).toHaveLength(27))
    })

    it('returns strings of length 3', () => {
      const input = ' _  _  _  _  _  _  _  _  _ '

      const rows = splitIntoChunks(3, input)
      rows.map(row => expect(row).toHaveLength(3))
    })

    it('returns array of input characters divided by length passed in', () => {
      const input = ' _  _  _  _  _  _  _  _  _ '

      expect(splitIntoChunks(3, input)).toHaveLength(9)
    })
  })

  describe('splitIntoDigits', () => {
    it('gets nine digits', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      expect(splitIntoDigits(input)).toHaveLength(9)
    })

    it('represents digits as strings', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const digits = splitIntoDigits(input)

      digits.map(digit => expect(typeof digit).toBe('string'))
    })

    it('returns digits of correct length', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const digits = splitIntoDigits(input)

      digits.map(digit => expect(digit).toHaveLength(9))
    })

    it('returns digits of 0', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      const digits = splitIntoDigits(input)

      digits.map(digit => expect(digit).toEqual(_0))
    })
  })

  describe('parseSingleNumber', () => {
    it('can parse 0', () => {
      expect(parseSingleNumber(_0)).toEqual(0)
    })
    it('can parse 1', () => {
      expect(parseSingleNumber(_1)).toEqual(1)
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

    it('can recognize ones', () => {
      const input = [
        '                           ',
        '  |  |  |  |  |  |  |  |  |',
        '  |  |  |  |  |  |  |  |  |',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('111111111')
    })

    it('can recognize twos', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        ' _| _| _| _| _| _| _| _| _|',
        '|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('222222222')
    })

    it('can recognize threes', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        ' _| _| _| _| _| _| _| _| _|',
        ' _| _| _| _| _| _| _| _| _|',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('333333333')
    })

    it('can recognize fours', () => {
      const input = [
        '                           ',
        '|_||_||_||_||_||_||_||_||_|',
        '  |  |  |  |  |  |  |  |  |',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('444444444')
    })

    it('can recognize fives', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
        ' _| _| _| _| _| _| _| _| _|',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('555555555')
    })

    it('can recognize sixes', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('666666666')
    })

    it('can recognize sevens', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '  |  |  |  |  |  |  |  |  |',
        '  |  |  |  |  |  |  |  |  |',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('777777777')
    })

    it('can recognize eights', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '|_||_||_||_||_||_||_||_||_|',
        '|_||_||_||_||_||_||_||_||_|',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('888888888')
    })

    it('can recognize nines', () => {
      const input = [
        ' _  _  _  _  _  _  _  _  _ ',
        '|_||_||_||_||_||_||_||_||_|',
        ' _| _| _| _| _| _| _| _| _|',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('999999999')
    })

    it('can recognize mixed account number', () => {
      const input = [
        '    _  _     _  _  _  _  _ ',
        '  | _| _||_||_ |_   ||_||_|',
        '  ||_  _|  | _||_|  ||_| _|',
      ].join('\n')
      expect(parseAccountNumber(input)).toEqual('123456789')
    })
  })
})
