import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { StyledAppDiv } from './Styled';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <StyledAppDiv className="App">
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/signup' element= {<SignUp/>} />
        <Route path='/login' element= {<Login/>} />
      </Routes>
    </StyledAppDiv>
  );
}

export default App;
