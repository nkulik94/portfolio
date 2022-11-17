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

function DetailedProject({ setHeader }) {
    const params = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        fetch(`https://portfolio-backend-production-f7fa.up.railway.app/projects/${params.id}`)
        .then(r => r.json())
        .then(setProject)
    }, [])

    useEffect(() => {
        setHeader(false)

        return () => setHeader(true)
    }, [])

    if (!project) return <div></div>
    console.log(project)

    return (
        <Container sx={{padding: '3rem'}}>
            <Paper sx={{textAlign: 'center', padding: '2rem', position: 'relative', backgroundColor: 'rgba(0,0,0,.7)'}}>
                <Button
                startIcon={<ArrowBackIcon />}
                sx={{position: 'absolute', top: 0, left: 0}}
                component={RouterLink}
                to='/projects'
                >
                    Back to Projects
                </Button>
                <Typography variant='h2'>{project.title}</Typography>
                <Link href={project.link} target="_blank">
                    <Box
                    component="img"
                    src={project.thumbnail}
                    sx={{width: 500, margin: 'auto'}}
                    />
                </Link>
                <DemoEmbeds demos={project.embed_links}/>
            </Paper>
        </Container>
    )
}

export default DetailedProject