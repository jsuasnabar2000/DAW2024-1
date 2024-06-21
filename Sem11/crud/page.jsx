import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'

const Page = () => {
  return (
	<div className='container'>
    <Header />
    <div className='container-center'>
      <Aside />
      <Main />
    </div>
    <Footer />
  </div>
  )
}

export default Page