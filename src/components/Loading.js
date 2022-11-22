import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Loading({ content }) {
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant='h4'>Loading {content}...</Typography>
        </Box>
    )
}

export default Loading