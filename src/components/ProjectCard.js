import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function ProjectCard({ project }) {
    return (
        <Card sx={{padding: '1rem', maxWidth: 300, backgroundColor: 'rgba(0,0,0,.7)'}}>
            <CardMedia
            component='iframe'
            src={project.embed}
            allowFullScreen
            />
            <CardContent>
                <Typography gutterBottom variant="h6" >
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.short_description}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup sx={{width: 'fit-content', margin: 'auto'}}>
                    <Button component={Link} href={project.github} target='_blank'>GitHub</Button>
                    <Button component={Link} href={project.link} target='_blank'>Link</Button>
                    <Button component={RouterLink} to={`/projects/${project.id}`}>Details</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}

export default ProjectCard