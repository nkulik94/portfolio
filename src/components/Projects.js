import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

function Projects() {
    const [projects, setProjetcs] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/projects')
        .then(r => r.json())
        .then(setProjetcs)
    }, [])
    
    return (
        <Box>

        </Box>
    )
}

export default Projects