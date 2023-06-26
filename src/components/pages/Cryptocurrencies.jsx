import React, { useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'


const Cryptocurrencies = () => {

  const {data: cryptosList, isFetching} = useGetCryptosQuery(); //renaming data to cryptosList

  const [cryptos , setCryptos] = useState(cryptosList?.data?.coins)

  if(isFetching) return 'Loading....'
  return (
    <div>Cryptocurrencies</div>
  )
}

export default Cryptocurrencies