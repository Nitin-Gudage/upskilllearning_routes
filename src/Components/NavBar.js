import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const pages = ['Home'];

    const activeStyle = {
        fontWeight: 'bold',
        color: '#921A40',
        textDecoration: 'none',
    };

    const inactiveStyle = {
        color: 'inherit',
        textDecoration: 'none',
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'transparent', backdropFilter: 'blur(20px)', color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon sx={{ mr: 1 }} />
                    <NavLink
                        to=''
                        style={{
                            fontWeight: 800, color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </NavLink>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <NavLink
                                to={page}
                                key={page}
                                style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                            >
                                {page}
                            </NavLink>
                        ))}
                    </Box>
                    <Box>
                        <NavLink to='login' >
                            <Button variant='outlined' sx={{ mr: 1 }}>
                                Login
                            </Button>
                        </NavLink>
                        <NavLink to='signup' >
                            <Button variant='outlined'>
                                Signup
                            </Button>
                        </NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
