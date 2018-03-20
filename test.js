import { parse } from './parser'

describe('number scanner', () => {
  it('can recognize zeroes', () => {
    const input = [
      ' _  _  _  _  _  _  _  _  _ ',
      '| || || || || || || || || |',
      '|_||_||_||_||_||_||_||_||_|',
    ].join('\n')
    expect(parse(input)).toEqual('000000000')
  })

  it.skip('can recognize ones', () => {
    const input = [
      '                           ',
      '  |  |  |  |  |  |  |  |  |',
      '  |  |  |  |  |  |  |  |  |',
    ].join('\n')
    expect(parse(input)).toEqual('111111111')
  })
})
