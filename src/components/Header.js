import React from "react";
import Container from "@mui/material/Container";
import ShortBio from "./ShortBio";
import NavBar from "./NavBar";

function Header() {

    return (
        <Container>
            <ShortBio />
            <NavBar />
        </Container>
    )
}

export default Header