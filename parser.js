import * as R from 'ramda'
import { _0, _1, _2, _3, _4, _5, _6, _7, _8, _9 } from './utils'

export const splitIntoChunks = (amountToSplit, accountNumber) => {
  const splitRegexSrc = `.{1,${amountToSplit}}`
  const splitRegex = new RegExp(splitRegexSrc, 'g')
  return accountNumber.match(splitRegex)
}

const zip3 = (array1, array2, array3) => {
  const firstZip = R.zip(array1, array2)
  const secondZip = R.zipWith((a, b) => a.concat(b), firstZip, array3)
  return secondZip
}

export const splitIntoDigits = accountNumber => {
  const rows = splitIntoChunks(27, accountNumber)
  const digitRows = rows.map(row => splitIntoChunks(3, row))
  const zippedRows = zip3(...digitRows)
  return zippedRows.map(zippedRow => zippedRow.join(''))
}

export const calculateChecksum = accountNumber => {
  const digits = accountNumber.split('')
  const digitsReversed = digits.reverse()
  const digitsMultiplied = digitsReversed.map(
    (digit, index) => digit * (index + 1)
  )
  const sum = R.sum(digitsMultiplied)
  return sum % 11
}

export const parseSingleNumber = digitString => {
  if (digitString === _0) return 0
  else if (digitString === _1) return 1
  else if (digitString === _2) return 2
  else if (digitString === _3) return 3
  else if (digitString === _4) return 4
  else if (digitString === _5) return 5
  else if (digitString === _6) return 6
  else if (digitString === _7) return 7
  else if (digitString === _8) return 8
  else if (digitString === _9) return 9
  return null
}

export const parseAccountNumber = accountNumber => {
  const digits = splitIntoDigits(accountNumber)
  const numbers = digits.map(parseSingleNumber)
  return numbers.join('')
}

export const getAccountNumber = possibleAccountNumber => {
  const accountNumber = parseAccountNumber(possibleAccountNumber)
  const checksum = calculateChecksum(accountNumber)
  if (checksum !== 0) {
    throw new Error('Not a valid account number')
  }
  return accountNumber
}
