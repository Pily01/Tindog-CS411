import './Header.css'
import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import logo from './TINDog.png'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <AccountBoxIcon className="header__icon" fontSize='large'/>
        </IconButton>
        <Link to = "/">
          <img className='header__logo' src={logo} alt="logo"/>
        </Link>
        <Link to = "/chat">
          <IconButton>
              <ForumIcon className="header__icon" fontSize='large'/>
          </IconButton>
        </Link>
    </div>
  )
}

export default Header