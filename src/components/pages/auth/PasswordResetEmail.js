import React from 'react';
import { Alert, Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordResetEmail = () => {
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
         
      }
         
      if(actualData.email) {
         console.log(actualData);
         document.getElementById('passwordResetEmail').reset();
         setError({status: true, msg:'Email has been Send. Please Check your inbox !!', type:'success'});
         
         setTimeout(()=> {
            navigate('/PasswordReset');
         }, 2000);   
      } 
      else {
         setError({status: true, msg:'Please provide valid Email!', type:'error'})
      }
      
   }


   return (
      <Grid container justifyContent="center">
         <Grid item sm={6} xm={12}>
            <Box component='form' noValidate sx={{mt: 0.5, px:2,}} id='passwordResetEmail' onSubmit={handleSubmit}>
               <TextField required color='secondary' margin='normal' fullWidth id='email' name='email' label='Your Email' />

               <Box textAlign='center'>
                  <Button variant='contained' color='secondary' type='submit' sx={{mt:3, mb:2, px:5, }}>
                     Send Email
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

export default PasswordResetEmail;