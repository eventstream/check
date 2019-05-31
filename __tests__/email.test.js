const isEmail = require('../src').isEmail

describe('Test Email', () => {

  test('Email valid', () => {
    expect(isEmail('qwerty@gmail.com')).toBe(true)
  })

  test('Email invalid', () => {
    expect(isEmail('qwerty.gmail.com')).toBe(false)
  })

})
