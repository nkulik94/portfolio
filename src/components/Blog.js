import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Loading from "./Loading";

function Blog() {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40nkulik')
        .then(r => r.json())
        .then(({ items }) => setBlogs(items))
    }, [])

    return (
        <Container>
            <Box sx={{textAlign: 'center', padding: '1rem'}}>
                <Typography
                variant='h6'
                component={Link}
                href='https://medium.com/@nkulik'
                target='_blank'
                >
                    See Full Medium Profile
                </Typography>
            </Box>
            {
                blogs
                ? 
                <Grid container spacing={2} sx={{padding: '1.5rem'}} justifyContent='center'>
                    {blogs.map(post => <BlogCard post={post} key={post.guid}/>)}
                </Grid>
                :
                <Loading content={"Blog Posts"} />
            }
        </Container>
    )
}

export default Blog