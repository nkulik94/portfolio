import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import Loading from "./Loading";
import projects from "../projects";

function Projects() {
    // const [projects, setProjects] = useState(null)

    // useEffect(() => {
    //     fetch('https://portfolio-backend-production-f7fa.up.railway.app/projects')
    //     .then(r => r.json())
    //     .then(setProjects)
    // }, [])

    return (
        <Grid container spacing={2} sx={{marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}} justifyContent='center'>
            {
                projects
                ?
                projects.map(project => {
                    return (
                        <Grid item key={project.title}>
                            <ProjectCard project={project} />
                        </Grid>
                    )
                })
                :
                <Loading content={"Projects"} />
            }
        </Grid>
    )
}

export default Projects