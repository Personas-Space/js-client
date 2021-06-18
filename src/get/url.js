
function url (address) {
  if (address && typeof address !== 'string') {
    throw new Error('Address must be of type string')
  }

  return {
    avatar: {
      small: address
        ? 'https://img.prs.onl/avatar/small/' + address + '.png'
        : 'https://img.prs.onl/avatar/placeholders/small.png',
      medium: address
        ? 'https://img.prs.onl/avatar/medium/' + address + '.png'
        : 'https://img.prs.onl/avatar/placeholders/medium.png'
    },
    profile: address ? 'https://data.prs.onl/persona/' + address + '.json' : 'https://personas.space/search',
    explorer: address ? 'https://personas.space/address/' + address : 'https://personas.space/search'
  }
}

module.exports = url
