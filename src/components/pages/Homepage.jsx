import { Col, Row, Statistic } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import millify from 'millify'
import { Link } from 'react-router-dom'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const Homepage = () => {

  const {data , isFetching}  = useGetCryptosQuery(10);
  console.log(data);
  if(isFetching) return 'Loading........'

  const globalData = data?.data?.stats
  return (
   <>
   <Title level={2} className='heading'>
    Global Crypto Stats
   </Title>
   <Row>
  
        <Col span={12} ><Statistic title='Total Cryptocurrencies' value={millify(globalData?.total)}/> </Col>
        <Col span={12} ><Statistic title='Total Exchanges' value={millify(globalData?.totalExchanges)}/> </Col>
        <Col span={12} ><Statistic title='Total Market Cap' value={millify(globalData?.totalMarketCap)}/> </Col>
        <Col span={12} ><Statistic title='Total 24h volume' value={millify(globalData?.total24hVolume)}/> </Col>
        <Col span={12} ><Statistic title='Total Markets' value={millify(globalData?.totalMarkets)}/> </Col>
        

   </Row>

   <div className="home-heading-container">
       <Title level={2} className='home-title'>Top 10 Cryptocurremcies in world</Title>
       <Title level={3} className='show-more'><Link to='/cryptocurrencies' >Show More</Link></Title>
   </div>
   <Cryptocurrencies simplyfied/>

      <div className="home-heading-container">
       <Title level={2} className='home-title'>Latest Crypyto News</Title>
       <Title level={3} className='show-more'><Link to='/news' >Show More</Link></Title>
   </div>
   <News simplyfied/>
   </>
  )
}

export default Homepage