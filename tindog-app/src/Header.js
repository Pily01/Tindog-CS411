import './Header.css'
import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import logo from './TINDog.png'

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <AccountBoxIcon className="header__icon" fontSize='large'/>
        </IconButton>
        <img className='header__logo' src={logo} alt="logo"/>
        <IconButton>
            <ForumIcon className="header__icon" fontSize='large'/>
        </IconButton>
        
    </div>
  )
}

export default Header