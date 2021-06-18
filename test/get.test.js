const { expect } = require('chai')
const URL = require('../src/get/url')

describe('Get module', function () {
  describe('URL function', function () {
    it('should fail when address is present but not a string', function () {
      expect(function () { URL({}) }).to.throw('Address must be of type string')
      expect(function () { URL(1) }).to.throw('Address must be of type string')
      expect(function () { URL([]) }).to.throw('Address must be of type string')
    })

    it('returns valid values when address is present', function () {
      const { avatar, profile, explorer } = URL('0x')

      expect(avatar.small).to.equal('https://img.prs.onl/avatar/small/0x.png')
      expect(avatar.medium).to.equal('https://img.prs.onl/avatar/medium/0x.png')

      expect(profile).to.equal('https://data.prs.onl/persona/0x.json')
      expect(explorer).to.equal('https://personas.space/address/0x')
    })

    it('returns valid defaults when address is missing', function () {
      const { avatar, profile, explorer } = URL()

      expect(avatar.small).to.equal('https://img.prs.onl/avatar/placeholders/small.png')
      expect(avatar.medium).to.equal('https://img.prs.onl/avatar/placeholders/medium.png')

      expect(profile).to.equal('https://personas.space/search')
      expect(explorer).to.equal('https://personas.space/search')
    })
  })
})
