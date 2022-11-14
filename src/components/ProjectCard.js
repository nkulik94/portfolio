import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function ProjectCard({ project }) {
    return (
        <Card>
            <CardMedia
            component='iframe'
            src={project.demo_embed_link}
            />
        </Card>
    )
}

export default ProjectCard