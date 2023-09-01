import React, { useEffect, useState } from 'react'
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material'
import {StyledNavDiv, StyledLogo} from './Styled'
import { useNavigate } from 'react-router-dom'
import './nav.css'

const Nav = () => {
const [show, setShow]= useState(false)
const navigate = useNavigate()
const transitionNavBar = ()=> {
  if (window.scrollY > 100){
    setShow(true)
  }else{
    setShow(false)
  }
}

const [anchorElUser, setAnchorElUser] = React.useState(null);
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};
const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

const handleNavigateToLogin = () =>{
  navigate('/login')
}
const handleNavigateToSignUp = () =>{
  navigate('/signup')
}

useEffect(()=>{
   window.addEventListener('scroll', transitionNavBar)
   return() => window.addEventListener('scroll',transitionNavBar)
},[])

  return (
    <div>
      <StyledNavDiv className={`${show && 'nav_black'}`}>
        <StyledLogo src='https://bespoke-puffpuff-cb3eb0.netlify.app/vstream-low-resolution-logo-color-on-transparent-background%20(1).png' alt='error'/>
        {/* <StyledAvatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n9HeEUrq7Pj9P0advGP3thHejzAB2_TRNfgpmlscnA6RL4ghAH3GMv3lpMkV3BfX2hI&usqp=CAU' alt='error'/> */}
        <Box sx={{ flexGrow: 0 , position: 'absolute', top: '13px', right: '2%'}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ borderRadius: '10px'}} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n9HeEUrq7Pj9P0advGP3thHejzAB2_TRNfgpmlscnA6RL4ghAH3GMv3lpMkV3BfX2hI&usqp=CAU" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
       
                <MenuItem onClick={handleNavigateToLogin}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem onClick={handleNavigateToSignUp}>
                <Typography textAlign="center">Sign Up</Typography>
                </MenuItem>
         
            </Menu>
          </Box>
      </StyledNavDiv>
    </div>
  )
}

export default Nav
