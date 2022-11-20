import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40nkulik')
        .then(r => r.json())
        .then(({ items }) => setBlogs(items))
    }, [])

    return (
        <Grid container spacing={2}>
            {blogs.map(post => <BlogCard post={post} key={post.guid}/>)}
        </Grid>
    )
}

export default Blog