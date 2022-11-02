import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function UnderConstruction() {
    return (
        <Container>
            <Box sx={{textAlign: 'center', marginTop: '50px'}}>
                <Typography variant='h1'>Under Construction</Typography>
                <Typography variant='h6'>naftalikulik.com is still in the works.</Typography>
                <Typography variant='h6'>To learn more about me, or to contact me, connect on <Link href='https://www.linkedin.com/in/naftali-kulik-se/'>LinkedIn</Link></Typography>
                <img src="https://media.giphy.com/media/q0eh4TU8OMXRu/giphy.gif" />
            </Box>
        </Container>
    )
}

export default UnderConstruction