const test = require('tape')
const chainId = require('./chain-id')

test('chainId', tape => {
  tape.plan(6)

  let id = chainId('mainnet')
  tape.equals(id, 1, 'mainnet')

  id = chainId('ropsten')
  tape.equals(id, 3, 'ropsten')

  id = chainId('rinkeby')
  tape.equals(id, 4, 'rinkeby')

  id = chainId('goerli')
  tape.equals(id, 5, 'goerli')

  id = chainId('kovan')
  tape.equals(id, 42, 'kovan')

  id = chainId('wapnet')
  tape.equals(id, 7475, 'wapnet')
})
