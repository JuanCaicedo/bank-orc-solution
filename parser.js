export const splitByRows = (amountToSplit, accountNumber) => {
  const splitRegexSrc = `.{1,${amountToSplit}}`
  const splitRegex = new RegExp(splitRegexSrc, 'g')
  return accountNumber.match(splitRegex)
}

export const splitIntoDigits = accountNumber => {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

export const parseAccountNumber = () => '000000000'
