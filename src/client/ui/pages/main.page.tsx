import React from 'react';
import {Box, Container} from '@mui/material';
import {Games} from '@ui/components/games';


export const Main: React.FC = () => {
    return (
        <Container
            maxWidth="xl"
        >
            <Box
                display="flex"
                flexDirection="row"
                sx={{
                    width: '100%',
                }}
                justifyContent="space-between"
                alignItems="flex-start"
                flexWrap="wrap"
            >
                <Box
                    sx={{
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'center',
                        marginTop: '10px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '30px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}        
                >
                    <Games />
                </Box>
            </Box>
        </Container>
    )
}