import React from "react";
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
        <Card sx={{padding: '1rem', maxWidth: 300}}>
            <CardMedia
            component='iframe'
            src={project.demo_embed_link}
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
                    <Button component={Link} href={project.github}>GitHub</Button>
                    <Button component={Link} href={project.link}>Link</Button>
                    <Button>Details</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}

export default ProjectCard