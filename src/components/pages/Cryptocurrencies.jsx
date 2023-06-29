import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Link } from 'react-router-dom';
import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';


const Cryptocurrencies = ({simplifield}) => {
  const count =simplifield? 10 : 100;

  const {data: cryptosList, isFetching} = useGetCryptosQuery(count); //re-naming data to cryptosList

  const [cryptos , setCryptos] = useState(cryptosList?.data?.coins); 
  const [searchTerm , setSearchTerm] = useState('');

  useEffect(()=>{
    setCryptos(cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase())));
  },[cryptosList, searchTerm]);

  if(isFetching) return 'Loading....'
  return (
    <div>
      <div className="search-crypto">
       <Input placeholder='Serach CryptoCurrency' onChange={e=>setSearchTerm(e.target.value)}></Input>
      </div>
      <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map(crypto=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
             <Card title={`${crypto.rank}. ${crypto.name}`}
             extra={<img className='crypto-image' src={crypto.iconUrl}/>}
             hoverable
             >
            
              <p>Price:{millify(crypto.price)}</p>
              <p>Market Capital:{millify(crypto.marketCap)}</p>
              <p>Daily Changes:{millify(crypto.change)}%</p>
      
              </Card>

            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies