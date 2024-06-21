import React from 'react'
import User1 from './user.png'
const Aside = () => {
  return (
	<aside className='container-aside'>
    <div>
    <a href="#" className='aside-link'>Home</a>
    <a href="#" className='aside-link'>Products</a>
    <a href="#" className='aside-link'>Services</a>
    <a href="#" className='aside-link'>Contact</a>
    <a href="#" className='aside-link'>Other</a>
    </div>
    <div className='div-img'>
      <img className='img-user' src={User1} alt="" />
      <h6>User Current: first name</h6>
    </div>
  </aside>
  )
}

export default Aside