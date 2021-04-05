const networks = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,
  WAPNET: 7475
}

/**
 * @param {Number, String, Object} network{chainId} or networkname
 * @return {Number} Ethereum chainId
 */
export default network => {
  if (!network) return 1
  if (isNaN(network) && typeof network === 'object' && network.chainId) return Number(network.chainId)
  if (!isNaN(network) ) return Number(network)

  return networks[network.toUpperCase()]
}
