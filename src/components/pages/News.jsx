import React from 'react'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'

const News = ({simplified}) => {
  const {data:cryptoNews , isFetching} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency' , count:simplified?10:100});

  if(isFetching) return 'Loading.........'
  console.log(cryptoNews)
  return (
    <>
    
    </>
  )
}

export default News