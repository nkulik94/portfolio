import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://portfolio-backend-production-f7fa.up.railway.app/projects')
        .then(r => r.json())
        .then(setProjects)
    }, [])

    return (
        <Grid container spacing={2} sx={{width: '80%', margin: 'auto'}}>
            {projects.map(project => {
                return (
                    <Grid item xs={4} key={project.id}>
                        <ProjectCard project={project} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Projects