import React, { useEffect, useState } from 'react'
import {StyledNavDiv, StyledLogo, StyledAvatar} from './Styled'
import './nav.css'

const Nav = () => {
const [show, setShow]= useState(false)
const transitionNavBar = ()=> {
  if (window.scrollY > 100){
    setShow(true)
  }else{
    setShow(false)
  }
}


useEffect(()=>{
   window.addEventListener('scroll', transitionNavBar)
   return() => window.addEventListener('scroll',transitionNavBar)
},[])

  return (
    <div>
      <StyledNavDiv className={`${show && 'nav_black'}`}>
        <StyledLogo src='https://bespoke-puffpuff-cb3eb0.netlify.app/vstream-low-resolution-logo-color-on-transparent-background%20(1).png' alt='error'/>
        <StyledAvatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n9HeEUrq7Pj9P0advGP3thHejzAB2_TRNfgpmlscnA6RL4ghAH3GMv3lpMkV3BfX2hI&usqp=CAU' alt='error'/>
      </StyledNavDiv>
    </div>
  )
}

export default Nav
