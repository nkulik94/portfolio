import React from "react";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ShortBio() {
    return (
        <Box sx={{width: '50%', textAlign: 'center', margin: 'auto', padding: '1%'}}>
            <Avatar sx={{height: '150px', width: '150px', margin: 'auto'}} src='https://i.ibb.co/Fq8L1h4/Whats-App-Image-2022-11-06-at-8-04-05-AM.jpg' />
            <Typography variant="h4">Naftali Kulik</Typography>
            <Typography variant='h6'>Full Stack Software Engineer</Typography>
            <Typography variant='title'>Skills: JavaScript | React | Ruby | Rails | SQL</Typography>
            <br/>
            <Typography variant="title">Currently Learning: React Native, Python</Typography>
        </Box>
    )
}

export default ShortBio