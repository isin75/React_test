import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navibar'>
        <div className='navibar__links'>
          <Link to='/about'>About website</Link>
          <Link to='/posts'>Posts</Link>
        </div>
      </div>
  )
}

export default Navbar