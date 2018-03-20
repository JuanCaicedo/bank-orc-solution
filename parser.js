import * as R from 'ramda'
import { _0 } from './utils'

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

export const parseAccountNumber = () => '000000000'
