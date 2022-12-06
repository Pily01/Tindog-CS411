import './SwipeButtons.css'
import React from 'react';
import ReplayIcon from '@mui/icons-material/Autorenew';
import RejectIcon from '@mui/icons-material/Close';
import LikeIcon from '@mui/icons-material/Pets';
import  { IconButton }  from '@mui/material';
import {Link} from "react-router-dom"

    function SwipeButtons () {
        return(
            <div className = 'swipeButtons'>
                <IconButton>
                    <RejectIcon className= 'button_reject' fontSize='large'/>
                </IconButton>
                <IconButton>
                    <ReplayIcon className= 'button_replay' fontSize='large'/>
                </IconButton>
                <IconButton>
                    <LikeIcon className= 'button_like' fontSize='large'/>
                </IconButton>
            </div>
        )
    }

    export default SwipeButtons