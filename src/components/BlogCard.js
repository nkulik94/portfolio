import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function BlogCard({ post }) {
    return (
        <Grid
        item
        sx={{
            maxWidth: 275,
            textDecoration: 'none'
        }}
        
        component={Link}
        href={post.link}
        target="_blank"
        >
            <Card sx={{height: '100%'}}>
                <CardMedia component='img' src={post.thumbnail}/>
                <CardContent>
                    <strong><Typography variant="title">{post.title}</Typography></strong>
                    <br/>
                    <br/>
                    <Typography variant="body"><strong>Categories:</strong> {post.categories.join(', ')}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default BlogCard