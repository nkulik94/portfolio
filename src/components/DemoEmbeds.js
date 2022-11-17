import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function DemoEmbeds({ demos }) {
    return (
        <Grid container spacing={2}>
            {demos.map(demo => {
                return (
                    <Grid item key={demo} sx={{margin: 'auto'}}>
                        <Box
                        component="iframe"
                        src={demo}
                        allowFullScreen
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DemoEmbeds