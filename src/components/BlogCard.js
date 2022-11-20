import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function BlogCard({ post }) {
    return (
        <Grid item sx={{maxWidth: 200, margin: 'auto'}} xs={3}>
            <Link href={post.link} sx={{textDecoration: 'none'}} target="_blank">
            <Card>
                <CardMedia component='img' src={post.thumbnail}/>
                <CardContent>
                    <strong><Typography variant="title">{post.title}</Typography></strong>
                    <br/>
                    <br/>
                    <Typography variant="body"><strong>Categories:</strong> {post.categories.join(', ')}</Typography>
                </CardContent>
            </Card>
            </Link>
        </Grid>
    )
}

export default BlogCard