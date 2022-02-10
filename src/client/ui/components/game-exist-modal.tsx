import React, {useState} from 'react';
import {Modal, Box, Button, Typography} from '@mui/material';


interface GameExistModalProps {
    show: boolean;
    onClose: () => void;
}


const Component: React.FC<GameExistModalProps> = ({
    show,
    onClose
}) => {

    return (
        <Modal
            open={show}
            onClose={onClose}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '400px',
                    minHeight: '150px',
                    backgroundColor: 'white'
                }}
            >
                <Typography
                    sx={{
                        marginBottom: '20px'
                    }}
                >
                    Игра с таким названием уже существует
                </Typography>
                <Button
                    onClick={onClose}
                >
                    <Typography>
                        Ok
                    </Typography>
                </Button>
            </Box>
        </Modal>
    )
}

export const GameExistModal = React.memo(Component);