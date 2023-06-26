import React from 'react'
import Navbar from './components/navbar/Navbar'
import Layout from 'antd/es/layout/layout'
import { Link, Route, Routes } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Exchanges from './components/pages/Exchanges'
import Cryptocurrencies from './components/pages/Cryptocurrencies'
import CryptoDetails from './components/pages/CryptoDetails'
import News from './components/pages/News'
import { Space, Typography } from 'antd'


const App = () =>
{
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>

              <Route exact path='/' element={ <Homepage /> } />
              <Route exact path='/exchanges' element={ <Exchanges /> } />
              <Route exact path='/cryptocurrencies' element={ <Cryptocurrencies /> } />
              <Route exact path='/crypto/:coinId' element={ <CryptoDetails /> } />
              <Route exact path='/news' element={ <News /> } />

            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={ 5 } style={ { color: 'white', textAlign: 'center' } }>
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>

          <Space>

            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
            <Link to='/'></Link>
          </Space>
        </div>
      </div>

    </div>
  )
}

export default App