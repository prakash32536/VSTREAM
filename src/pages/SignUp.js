import React, { useState } from 'react'
import img from '../img/Background.png'
import { StyledLoginParentDiv, StyledCard, StyledSpan, StyledForm, StyledButtonForLoginAndSignin, StyledTextField, StyledP } from './Styled'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
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

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>  {
                // Signed in 
                const user = userCredential.user;
                console.log("user Data", user )
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log("errorMessage",errorMessage)
                alert(errorMessage)
            });
    }


    const haldleNavigate = () => {
        navigate('/')
    }
    return (
        <div>
            <StyledLoginParentDiv style={{ backgroundImage: `url(${img})` }} >
                <StyledCard>
                    <Typography variant='h5'>Welcome to V-STREAM</Typography>
                    <StyledForm onSubmit={handleSubmit}>
                        <StyledTextField name='email' onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" />
                        <StyledTextField name='password' onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" />
                        <StyledButtonForLoginAndSignin type='submit' variant="contained">Sign UP</StyledButtonForLoginAndSignin>
                        <StyledP>If you have an account <StyledSpan onClick={haldleNavigate}> Please Login</StyledSpan></StyledP>
                    </StyledForm>
                </StyledCard>
            </StyledLoginParentDiv>
        </div>
    )
}

export default SignUp
