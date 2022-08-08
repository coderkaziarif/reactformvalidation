import React from 'react';
import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {
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
         password: data.get('password'),
         password_confirm: data.get('password_confirm'),
         
      }
         
      if(actualData.password && actualData.password_confirm) {
         if(actualData.password === actualData.password_confirm) {
            console.log(actualData);
            document.getElementById('passwordResetForm').reset();
            setError({status: true, msg:'Password Reset Successfully. Redirecting to Login Page...', type:'success'}); 
            setTimeout(()=> {
               navigate('/login')
            }, 3000)
         } else {
            setError({status: true, msg:'Password Does not Match', type:'error'})
   
            }           
      } 
      else {
         setError({status: true, msg:'Fill all the field', type:'error'})
      }
      
   }


   return (
      <Grid container justifyContent="center">
         <Grid item sm={6} xm={12}>
            <Box component='form' noValidate sx={{mt: 0.5, px:2,}} id='passwordResetForm' onSubmit={handleSubmit}>
               <Typography variant='h5'>Change Password</Typography>
               <TextField required color='secondary' margin='normal' fullWidth id='password' name='password' type='password' label='New Password' />
               <TextField required color='secondary' margin='normal' fullWidth id='password_confirm' name='password_confirm' type='password' label='New Confirm Password' />

               <Box textAlign='center'>
                  <Button variant='contained' color='secondary' type='submit' sx={{mt:3, mb:2, px:5, textTransform:"none"}}>
                     Save
                  </Button>
               </Box>
            
               {
                  error.status? <Alert severity={error.type}>{error.msg}</Alert> : ""
               }    
            </Box>
         </Grid>
      </Grid>
   );
};
export default PasswordReset;