import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Navbar.css'


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function EnableColorOnDarkAppBar() {
    return (
        <Stack>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    <div className="navbar">
                        <h3 className='logo'>ZOOMIT</h3>
                        <MenuIcon />
                    </div>
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}