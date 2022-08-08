import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import PasswordResetEmail from './components/pages/auth/PasswordResetEmail';
import PasswordReset from './components/pages/auth/PasswordReset';
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";

// <----customize theme---->
const theme = createTheme({
  palette: {
    primary: {
      main: "#f50057",
      // main: "#6200ea",
      // main: "#76ff03",
    },
    secondary: {
      // main: "#4dd0e1",
      main: "#6200ea",
    },   
  },
  typography: {
    fontFamily: "Comic Sans MS"
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="login" element={<LoginReg/>} />
            <Route path="PasswordResetEmail" element={<PasswordResetEmail/>} />
            <Route path="PasswordReset" element={<PasswordReset/>} />
          </Route>
          <Route path='/*' element= {<h1>Error 404 Page not Found !!!</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
