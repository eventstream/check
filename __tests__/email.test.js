const isEmail = require('../src').isEmail

describe('Test Email', () => {

  describe('Valid', () => {
    test('Email valid: qwerty@gmail.com', () => {
      expect(isEmail('qwerty@gmail.com')).toBe(true)
    })

    test('Email valid: антон@лукичев.про', () => {
      expect(isEmail('антон@лукичев.про')).toBe(true)
    })


  })

  describe('Invalid', () => {
    test('Email invalid', () => {
      expect(isEmail('qwerty.gmail.com')).not.toBe(true)
    })

    test('Email invalid: @.', () => {
      expect(isEmail('qwerty@.gmail.com')).not.toBe(true)
    })

    test('Email invalid: @gmail..com', () => {
      expect(isEmail('qwerty@gmail..com')).not.toBe(true)
    })

    test('Email invalid: @-gmail.com', () => {
      expect(isEmail('qwerty@-gmail.com')).not.toBe(true)
    })
  })

})
