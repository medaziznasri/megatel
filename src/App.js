import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Logo from './logo';



function App() {
  
  return (
    <>
     <Logo/>

      <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm></LoginForm>}></Route>
          <Route path='/Login' element={<LoginForm></LoginForm>}></Route>
          <Route path='/Login/Register' element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    
       
        


     
  
  
  </>
  
  );
  
}

export default App;