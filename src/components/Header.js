import React from "react";
import Container from "@mui/material/Container";
import ShortBio from "./ShortBio";
import NavBar from "./NavBar";
import Paper from "@mui/material/Paper";

function Header() {
    return (
        <Container>
            <ShortBio />
            {/* <Paper sx={{width: 'fit-content', margin: 'auto', padding: '2%'}}> */}
                <NavBar />
            {/* </Paper> */}
        </Container>
    )
}

export default Header