const { checkLength, checkAlphabet, checkDigit, checkSymbol, checkPassword } = require('./password')
describe('Test Password Length', () => {
  test('should 8 character to be true', () => {
    expect(checkLength('12345678')).toBe(true)
  })
  test('should 7 characters to be false', () => {
    expect(checkLength('1234567')).toBe(false)
  })
  test('should 25 characters to be true', () => {
    expect(checkLength('1111111111111111111111111')).toBe(true)
  })
  test('should 26 characters to be false', () => {
    expect(checkLength('11111111111111111111111111')).toBe(false)
  })
})

describe('Test Password Alphabet', () => {
  test('should has alphabet m in pass ', () => {
    expect(checkAlphabet('m')).toBe(true)
  })

  test('should has alphabet A in pass ', () => {
    expect(checkAlphabet('A')).toBe(true)
  })
  test('should has not alphabet in pass ', () => {
    expect(checkAlphabet('11111')).toBe(false)
  })
})

describe('Test Password digit', () => {
  test('should has digit in pass to be true ', () => {
    expect(checkDigit('123')).toBe(true)
  })

  test('should has not digit in pass ', () => {
    expect(checkDigit('asdkwawdl')).toBe(false)
  })
})

describe('Test Password symbol', () => {
  test('should has symbol in pass to be true ', () => {
    expect(checkSymbol('*!-')).toBe(true)
  })

  test('should has not symbol in pass ', () => {
    expect(checkSymbol('lkgfg55')).toBe(false)
  })
})

describe('Test password', () => {
  test('should password myhex0+ to be true', () => {
    expect(checkPassword('myhex0+')).toBe(true)
  })
  test('should password hahahahah to be false', () => {
    expect(checkPassword('hahahahah')).toBe(false)
  })
})
