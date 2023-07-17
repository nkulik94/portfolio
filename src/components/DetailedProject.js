import React, { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DemoEmbeds from "./DemoEmbeds";
import Loading from './Loading'
import projects from "../projects";

function DetailedProject({ setHeader }) {
    const params = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        setProject(projects.find(project => project.id == params.id))
    }, [])

    useEffect(() => {
        setHeader(false)

        return () => setHeader(true)
    }, [])

    if (!project) return <Loading content={"Project"} />

    return (
        <Container sx={{padding: '3rem'}}>
            <Paper sx={{textAlign: 'center', padding: '2rem', position: 'relative'}}>
                <Button
                startIcon={<ArrowBackIcon />}
                sx={{position: 'absolute', top: 0, left: 0}}
                component={RouterLink}
                to='/projects'
                >
                    Back to Projects
                </Button>
                <Typography variant='h2'>{project.title}</Typography>
                <br/>
                <Typography
                variant="h6"
                component={Link}
                href={project.github}
                target="_blank">
                    GitHub Repo
                </Typography>
                <br/>
                <br/>
                <Link href={project.link} target="_blank">
                    <Box
                    component="img"
                    src={project.thumbnail}
                    sx={{width: '50%', margin: 'auto'}}
                    />
                </Link>
                <br/>
                <br/>
                <DemoEmbeds demos={project.demo_embed_link.split('|')}/>
                <div dangerouslySetInnerHTML={{__html: project.description}}/>
            </Paper>
        </Container>
    )
}

export default DetailedProject