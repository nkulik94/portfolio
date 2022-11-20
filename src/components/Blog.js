import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40nkulik')
        .then(r => r.json())
        .then(({ items }) => setBlogs(items))
    }, [])

    return (
        <Container>
            <Grid container spacing={2} sx={{padding: '1.5rem'}}>
                {blogs.map(post => <BlogCard post={post} key={post.guid}/>)}
            </Grid>
        </Container>
    )
}

export default Blog