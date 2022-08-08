import React from 'react';
import { Alert, Box, Button, FormControlLabel, TextField, Checkbox } from  '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
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
         name: data.get('name'),
         email: data.get('email'),
         password: data.get('password'),
         password_confirm: data.get('password_confirm'),
         tc: data.get('tc'),
      }
      
      if(actualData.name && actualData.email && actualData.password && actualData.password_confirm && actualData.tc !== null) 
      {
         if(actualData.password === actualData.password_confirm) {
            console.log(actualData);
            document.getElementById('signup_form').reset();
            setError({status: true, msg:'Sign Up done Successfully!', type:'success'})
            setTimeout(()=> {
               navigate('/');
            }, 2000) 
         } 
         else {
            setError({status: true, msg:'Password Does not match', type:'error'})
         }
              
      } 
      else {
         setError({status: true, msg:'All Fields are Required!', type:'error'})
      }
      
   }
   return (
      <>
         <Box component='form' noValidate id='signup_form' onSubmit={handleSubmit}>
            <TextField required color='secondary' margin='dense' size='small' fullWidth id='name' name='name' label='Your Name' />
            <TextField required color='secondary' margin='dense' size='small' fullWidth id='email' name='email' label='Your Email' />
            <TextField required color='secondary' margin='dense' size='small' fullWidth id='password' name='password' type='password' label='Your Password' />
            <TextField required color='secondary' margin='dense' size='small' fullWidth id='password_confirm' name='password_confirm' type='password' label='Confirm Password' />

            <FormControlLabel control={<Checkbox value='agree' color='secondary' name='tc' id='tc'/>} label='I agree to terms and condition' />

            <Box textAlign='center'>
               <Button variant='contained' color='secondary' type='submit' sx={{mt:3, mb:2, px:5, textTransform:'none' }}>
                  SinUp
               </Button>
            </Box>
             
            {
               error.status? <Alert severity={error.type}>{error.msg}</Alert> : ""
            }    
         </Box>
         
      </>
   );
};

export default SignUp;