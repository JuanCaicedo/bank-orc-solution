export const splitByRows = accountNumber => {
  return accountNumber.match(/.{1,27}/g)
}

export const splitIntoDigits = accountNumber => {
  return [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

export const parseAccountNumber = () => '000000000'
