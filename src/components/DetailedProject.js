import React, { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from "@mui/material/Link";

function DetailedProject({ setHeader }) {
    const params = useParams()

    useEffect(() => {
        fetch(`https://portfolio-backend-production-f7fa.up.railway.app/projects/${params.id}`)
        .then(r => r.json())
        .then(console.log)
    }, [])

    useEffect(() => {
        setHeader(false)

        return () => setHeader(true)
    }, [])
 
    return <Link component={RouterLink} to='/projects'>Projects</Link>
}

export default DetailedProject