import React, {useContext} from 'react'
import logo from '../images/logo_header.png'
import {Link} from 'react-router-dom'
import AuthContext from './AuthContext'

function Header() {
  const {user} = useContext(AuthContext)
  return (
    <div style={{backgroundColor: 'black'}}>
      <img src={logo} alt='logo' style={{height: 80, marginRight: 35}}></img>
      <Link to='/' style={{textDecoration: 'none', color: 'white', fontSize: '20px', marginRight: 35}}>Home</Link>
      { !user &&
        <Link to='/login' style={{textDecoration: 'none', color: 'white', fontSize: '20px', marginRight: 35}}>Login</Link>
      }
      { user && 
        <a href='/' style={{textDecoration: 'none', color: 'white', fontSize: '20px', marginRight: 35}}>Logout</a>
      }

      <Link to='/about' style={{textDecoration: 'none', color: 'white', fontSize: '20px'}}>About</Link>
    </div>
  )
}

export default Header
