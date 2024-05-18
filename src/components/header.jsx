import React from 'react'
import Cards from './cards'
import Slider from './slider'

const Header = () => {
  return (
    <div className='header'>
      <Slider/>
      <Cards/>
    </div>
  )
}

export default Header