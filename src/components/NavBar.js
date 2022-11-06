import React from 'react';
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    borderBottom: '2px solid red',
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return (
        <Box id='nav-bar' sx={{width: 'fit-content', margin: 'auto'}}>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    borderBottom: '2px solid lightblue',
                }}
            >
                <Typography>About</Typography>
            </NavLink>
            <NavLink
            to="/projects"
            exact
            style={linkStyles}
                activeStyle={{
                    borderBottom: '2px solid lightblue',
                }}
            >
                Projects
            </NavLink>
            <NavLink
            to="/blog"
            exact
            style={linkStyles}
                activeStyle={{
                    borderBottom: '2px solid lightblue',
                }}
            >
                Blog
            </NavLink>
        </Box>
    )
}

export default NavBar