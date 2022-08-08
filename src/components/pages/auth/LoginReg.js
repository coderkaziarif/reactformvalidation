import { ShoppingBag } from '@mui/icons-material';
import { Card, Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import logo from '../../../images/pic1.png';
import Login from './Login';
import SignUp from './SignUp';

// <====Tab Panel====>
const TabPanel = (props) => {
   const {children, value, index} = props;
   return (
      <div role='tabPanel' hidden={value !== index}>
         {
            value === index && (
               <Box>{children}</Box>
            )
         }
      </div>
   )

}

const LoginReg = () => {
   const [value, setValue] = useState(0);
   const handleChange = (e, newValue) => {
      setValue(newValue);
   }
   return (
      <>
         <Grid container sx={{height: '70vh',}}>
            <Grid item lg={7} sm={5} sx={{
               backgroundImage: `url(${logo})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               display: {xs:'none', sm:'block'}
               }}>
            </Grid>
            <Grid item lg={5} sm={7} xs={12}>
               <Card sx={{width: '100%', height: '100%'}}>
                  <Box sx={{mx:2}} >
                     <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                           <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                           <Tab label='Sin Up' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                        </Tabs>
                     </Box>
                     <TabPanel value={value} index={0}><Login/></TabPanel>
                     <TabPanel value={value} index={1}><SignUp/></TabPanel>
                 </Box>
                 <Box textAlign='center' sx={{mt: 2}}>
                     <ShoppingBag sx={{color: 'primary', fontSize: 100}} />
                     <Typography variant='h5' sx={{fontWeight: 'bold'}}>Kazi Shop</Typography>
                 </Box>
               </Card>
            </Grid>
         </Grid>
        
      </>
   );
};

export default LoginReg;