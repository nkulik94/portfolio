import React from "react";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function ShortBio() {
    return (
        <Box sx={{width: '50%', textAlign: 'center', margin: 'auto', padding: '1%'}}>
            <Link href="https://www.linkedin.com/in/naftali-kulik-se/" target="_blank">
                <Avatar sx={{height: '150px', width: '150px', margin: 'auto'}} src='https://i.ibb.co/Fq8L1h4/Whats-App-Image-2022-11-06-at-8-04-05-AM.jpg' />
            </Link>
            <Typography variant="h4">Naftali Kulik</Typography>
            <Typography variant='h6'>Software Developer at Senior Planning Services</Typography>
            <Typography variant='title'>Skills: JavaScript | React | Ruby | Rails | Python | SQL</Typography>
            <br/>
            <Typography variant="title">Currently Learning: AWS</Typography>
        </Box>
    )
}

export default ShortBio