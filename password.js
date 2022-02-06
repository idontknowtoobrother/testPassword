const checkLength = (password) => {
  return password.length >= 8 && password.length <= 25
}

const checkAlphabet = (password) => {
  // const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  // for (const ch of password) {
  //   if (alphabets.includes(ch.toLowerCase())) return true
  // }
  // return false
  return /[a-zA-Z]/.test(password)
}

const checkDigit = (password) => {
  return /[0-9]/.test(password)
}

const checkSymbol = (password) => {
  const symbol = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
  for (const ch of password) {
    if (symbol.includes(ch.toLowerCase())) return true
  }
  return false
}

const checkPassword = (password) => {
  return checkLength(password) &&
  checkAlphabet(password) &&
  checkDigit(password) &&
  checkSymbol(password)
}
