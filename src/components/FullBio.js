import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';

function FullBio() {
    return (
        <Paper sx={{padding: '1rem'}}>
            <Typography variant='h4'>Bio:</Typography>
            <Typography variant="body" component='p'>
                I am the lead Software Developer on the software integrations team for 100 Boulevard Management in Lakewood, NJ.
                Our team is responsible for developing deploying, and maintaining microservices which leverage 3rd party
                software integrations to automate workflows for several companies, including <Link href="https://www.seniorplanning.com/">Senior Planning Services</Link>, <Link href="https://www.spscs.com/">SPS Community Solutions</Link>, <Link href="https://www.medcheckusa.com/">Medcheck USA</Link> and others.
            </Typography>
            <br/>
            <Typography variant="body" component='p'>
                Before taking my current job, I completed Flatiron School's Software Engineering
                program, during which I acquired the skills to be a successful programmer
                and gained proficiency in JavaScript, React, and Ruby on Rails. I have applied
                that knowledge to develop and deploy several projects, the best of which are
                featured here on the <Link component={RouterLink} to='/projects'>projects</Link> page.
                My goal is to continue learning and developing my skills and to maximize my potential
                in the field.
            </Typography>
            <br/>
            <Typography variant="body" component="p">
                To get in touch, <Link href='mailto:naftalikulikse@gmail.com'>email me</Link>{' '}
                (naftalikulikse@gmail.com) or connect with me on <Link href="https://www.linkedin.com/in/naftali-kulik-se/" target='_blank'>LinkedIn</Link>.
            </Typography>
            {/* <br/>
            <Typography variant="body" component="p">
                I'm looking for a job, so don't be shy if you'd like to see my resume or you know of
                an open position which may be a fit!
            </Typography> */}
            <br />
            <Typography variant="body" component="p">
                The code for this website is <Link href='https://github.com/nkulik94/portfolio' target="_blank">here</Link>{' '}
                if you're interested in that kind of thing. I don't use this <Link href='https://github.com/nkulik94/portfolio-backend' target="_blank">backend</Link> any more, because Railway wanted to charge me.
            </Typography>
        </Paper>
    )
}

export default FullBio