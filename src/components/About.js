import React from "react";
import Container from "@mui/material/Container";
import FullBio from "./FullBio";

function About() {
    return (
        <Container sx={{width: '80%', padding: '1rem'}}>
            <FullBio />
        </Container>
    )
}

export default About