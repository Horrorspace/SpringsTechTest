import React, {useState} from 'react';
import {Modal, Box, Button, ButtonGroup, Typography, TextField} from '@mui/material';
import {gameResponse} from '@modules/games/games.type';


export type addHandler = (game: gameResponse) => void;

interface GameAddModalProps {
    show: boolean;
    onAdd: addHandler;
    onClose: () => void;
}

interface GameAddModalState {
    name: string;
    iconUrl: string;
    nameError: boolean;
    iconError: boolean;
}


const Component: React.FC<GameAddModalProps> = ({
    show,
    onAdd,
    onClose
}) => {
    const initState: GameAddModalState = {
        name: '',
        iconUrl: '',
        nameError: false,
        iconError: false
    };
    const [state, setState] = useState(initState);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const name = target.value;
        setState(prev => ({
            ...prev,
            name
        }))
    }

    const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const iconUrl = target.value;
        setState(prev => ({
            ...prev,
            iconUrl
        }))
    }

    const handleAdd = () => {
        const {name, iconUrl} = state;
        if(name && iconUrl) {
            const game: gameResponse = {
                name,
                icon_url: iconUrl
            };
            onAdd(game);
            setState(prev => ({
                ...prev,
                name: '',
                iconUrl: '',
            }))
        }
        if(!name) {
            setState(prev => ({
                ...prev,
                nameError: true
            }));
            setTimeout(() => {
                setState(prev => ({
                    ...prev,
                    nameError: false
                }))
            }, 1500);
        }
        if(!iconUrl) {
            setState(prev => ({
                ...prev,
                iconError: true
            }));
            setTimeout(() => {
                setState(prev => ({
                    ...prev,
                    iconError: false
                }))
            }, 1500);
        }
    }

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
                alignItems="center"
                sx={{
                    width: '600px',
                    minHeight: '350px',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TextField 
                    label="Название игры"
                    sx={{
                        width: '400px',
                        marginBottom: '30px'
                    }}
                    error={state.nameError}
                    value={state.name}
                    onChange={handleNameChange}
                />
                <TextField
                    label="Ссылка на иконку"
                    sx={{
                        width: '400px',
                        marginBottom: '60px'
                    }}
                    error={state.iconError}
                    value={state.iconUrl}
                    onChange={handleIconChange}
                />
                <ButtonGroup>
                    <Button
                        onClick={handleAdd}
                    >
                        <Typography>
                            Добавить
                        </Typography>
                    </Button>
                    <Button
                        color="error"
                        onClick={onClose}
                    >
                        <Typography>
                            Отменить
                        </Typography>
                    </Button>
                </ButtonGroup>
            </Box>
        </Modal>
    )
}

export const GameAddModal = React.memo(Component);