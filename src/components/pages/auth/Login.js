import React from 'react';
import { Alert, Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
   const [error, setError] = useState({
      status: false,
      msg: "",
      type: "",
   })
   const navigate = useNavigate();
   const handleSubmit = (e)=> {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData = {
         email: data.get('email'),
         password: data.get('password'),
      }
      
      if(actualData.email && actualData.password) {
         console.log(actualData);
         document.getElementById('login_form').reset();
         setError({status: true, msg:'Logged In Successfully!', type:'success'})
         setTimeout(()=> {
            navigate('/');
         }, 2000)     
      } 
      else {
         setError({status: true, msg:'All Fields are Required!', type:'error'})
      }
      
   }
   return (
      <Box component='form' noValidate  id='login_form' onSubmit={handleSubmit}>
         <TextField required color='secondary' margin='normal' fullWidth id='email' name='email' label='Your Email' />
         <TextField required color='secondary' margin='normal' fullWidth id='password' name='password' type='password' label='Your Password' />
         <Box textAlign='center'>
            <Button variant='contained' color='secondary' type='submit' sx={{mt:3, mb:2, px:5, }}>
               Login
            </Button>
         </Box>
         <NavLink to='/PasswordResetEmail'>Forget Password?</NavLink>   
         {
            error.status? <Alert severity={error.type}>{error.msg}</Alert> : ""
         }    
      </Box>
   );
};

export default Login;