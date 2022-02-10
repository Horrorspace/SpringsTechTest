import React from 'react';
import {Box, IconButton, Typography, Avatar} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';



export type btnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;

interface GameItemProps {
    id: number;
    iconUrl: string;
    name: string;
    isMoveDisabled: boolean;
    onUpBtnCLick: btnClickHandler;
    onDownBtnClick: btnClickHandler;
    onDeleteClick: btnClickHandler;
}


const Component: React.FC<GameItemProps> = ({
    id,
    iconUrl,
    name,
    isMoveDisabled,
    onUpBtnCLick,
    onDownBtnClick,
    onDeleteClick
}) => {
    const idStr = `${id}.`

    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            component="li"
            key={id}
            sx={{
                marginTop: '10px',
                marginBottom: '10px'
            }}
        >
            <Typography
                sx={{
                    width: '40px'
                }}
            >
                {idStr}
            </Typography>
            <Avatar 
                alt="game icon"
                src={iconUrl}
                sx={{
                    marginRight: '10px'
                }}
            />
            <Typography
                sx={{
                    width: '420px',
                    marginRight: '10px',
                    overflowWrap: 'break-word'
                }}
            >
                {name}
            </Typography>
            <IconButton
                color="primary"
                onClick={onUpBtnCLick}
                id={`${id}`}
                disabled={isMoveDisabled}
            >
                <ArrowUpwardIcon />
            </IconButton>
            <IconButton
                color="primary"
                onClick={onDownBtnClick}
                id={`${id}`}
                disabled={isMoveDisabled}
            >
                <ArrowDownwardIcon />
            </IconButton>
            <IconButton
                color="error"
                onClick={onDeleteClick}
                id={`${id}`}
            >
                <ClearIcon />
            </IconButton>
        </Box>
    )
}

export const GameItem = React.memo(Component);