const isEmail = require('../src').isEmail

describe('Test Email', () => {
  describe('Valid', () => {
    test('Email valid: qwerty@example.com', () => {
      expect(isEmail('qwerty@example.com')).toBe(true)
    })

    test('Cyrillic characters', () => {
      expect(isEmail('антон@лукичев.про')).toBe(true)
    })

    test('Latin alphabet with diacritics', () => {
      expect(isEmail('Pelé@example.com')).toBe(true)
    })

    test('Greek alphabet', () => {
      expect(isEmail('δοκιμή@παράδειγμα.δοκιμή')).toBe(true)
    })

    test('Traditional Chinese characters', () => {
      expect(isEmail('我買@屋企.香港')).toBe(true)
    })

    test('Japanese characters', () => {
      expect(isEmail('二ノ宮@黒川.日本')).toBe(true)
    })

    test('Devanagari characters', () => {
      expect(isEmail('संपर्क@डाटामेल.भारत')).toBe(true)
    })

    test('Printable characters', () => {
      expect(isEmail('!#$%&\'*+-/=?^_`.{|}~@example.com')).toBe(true)
    })
  })

  describe('Invalid', () => {
    test('no @ character', () => {
      expect(isEmail('qwerty.example.com')).not.toBe(true)
    })

    test('only one @ is allowed outside quotation marks', () => {
      expect(isEmail('qwer@ty@example.com')).not.toBe(true)
    })

    test('@.', () => {
      expect(isEmail('qwerty@.example.com')).not.toBe(true)
    })

    test('@example..com', () => {
      expect(isEmail('qwerty@example..com')).not.toBe(true)
    })

    test('@-example.com', () => {
      expect(isEmail('qwerty@-example.com')).not.toBe(true)
    })

    test('none of the special characters in this local-part are allowed outside quotation marks', () => {
      expect(isEmail('a"b(c)d,e:f;g<h>i[j\\k]l@example.com')).not.toBe(true)
    })

    test('quoted strings must be dot separated or the only element making up the local-part', () => {
      expect(isEmail('just"not"right@example.com')).not.toBe(true)
    })

    test('spaces, quotes, and backslashes may only exist when within quoted strings and preceded by a backslash', () => {
      expect(isEmail('this is"notallowed@example.com')).not.toBe(true)
    })

    test('even if escaped (preceded by a backslash), spaces, quotes, and backslashes must still be contained by quotes', () => {
      expect(isEmail('this still"not allowed@example.com')).not.toBe(true)
    })

    test('local part is longer than 64 characters', () => {
      expect(isEmail('1234567890123456789012345678901234567890123456789012345678901234+x@example.com')).not.toBe(true)
    })

    test('domain is longer than 255 characters', () => {
      expect(isEmail('example@example1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890.com')).not.toBe(true)
    })
  })
})
