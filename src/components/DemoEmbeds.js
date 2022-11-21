import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function DemoEmbeds({ demos }) {
    return (
        <Grid container spacing={2} justifyContent='center'>
            {demos.map(demo => {
                return (
                    <Grid item key={demo}>
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