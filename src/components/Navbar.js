import React from 'react';
import {AppBar,Toolbar, Box, Typography, Button } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         <Box sx={{flexGrow: 1 }}>
            <AppBar position='static' color='secondary'>
               <Toolbar>
                  <Typography variant='h5' component="div" sx={{flexGrow: 1}} >
                     KaziShop
                  </Typography>
                  <Button component={NavLink} to='/'  sx={{color: 'white', mr: 2, textTransform:'none'}} 
                     style={({isActive}) => {
                     return {backgroundColor: isActive? '#651fff' : ""}}} >
                        Home
                  </Button>

                  <Button component={NavLink} to='/contact' sx={{color: 'white', mr: 2, textTransform:'none'}}
                     style={({isActive}) => 
                     { return { backgroundColor: isActive ? '#651fff' : "" }}}  > 
                     Contact
                  </Button>
                  
                  <Button component={NavLink} to='/login'  sx={{color: 'white', 
                     mr: 2, textTransform:'none'}} 
                     style={({isActive}) => 
                     { return { backgroundColor: isActive ? '#651fff' : "" }}} > 
                     Login / Sinup
                  </Button>
               </Toolbar>
            </AppBar>
         </Box>
      </>
   );
};

export default Navbar;