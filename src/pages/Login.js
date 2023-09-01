import React, { useState } from 'react'
import img from '../img/Background.png'
import { StyledLoginParentDiv, StyledCard, StyledSpan, StyledForm, StyledButtonForLoginAndSignin, StyledTextField, StyledP } from './Styled'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFromData((preData) => ({
      ...preData,
      [name]: value
    }))
  }
  const email = formData.email
  const password = formData.password

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("login", user)
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error from login", errorCode)
        alert(errorMessage)
      });
  }

  const haldleNavigate = () => {
    navigate('/signup')
  }
  return (
    <div>
      <StyledLoginParentDiv style={{ backgroundImage: `url(${img})` }} >
        <StyledCard>
          <Typography variant='h5'>Welcome to V-STREAM</Typography>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField onChange={handleChange} id="outlined-basic" name='email' label="Email" variant="outlined" />
            <StyledTextField onChange={handleChange} id="outlined-basic" name='password' label="Password" variant="outlined" />
            <StyledButtonForLoginAndSignin type='submit' variant="contained">Login</StyledButtonForLoginAndSignin>
            <StyledP>If you not have a account <StyledSpan onClick={haldleNavigate}> click here to Create</StyledSpan></StyledP>
          </StyledForm>
        </StyledCard>
      </StyledLoginParentDiv>
    </div>
  )
}

export default Login
