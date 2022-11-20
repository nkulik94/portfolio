import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import { Container } from "@mui/material";

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://portfolio-backend-production-f7fa.up.railway.app/projects')
        .then(r => r.json())
        .then(setProjects)
    }, [])

    return (
        <Grid container spacing={2} sx={{marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}} justifyContent='center'>
            {projects.map(project => {
                return (
                    <Grid item key={project.id}>
                        <ProjectCard project={project} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Projects