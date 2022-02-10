import React from 'react';
import {ButtonGroup , Button, Typography, Select, Box, MenuItem, SelectChangeEvent } from '@mui/material';
import {sort, sortOption} from '@modules/games/games.type';


export type selectChangeHandler<T> = (e: SelectChangeEvent<T>) => void;
export type btnClick = () => void;

interface GameMenuProps {
    sort: sort;
    sortDirection: sortOption;
    onSortChange: selectChangeHandler<sort>;
    onDirectionChange: selectChangeHandler<sortOption>;
    onDownloadClick: btnClick;
    onAddClick: btnClick;
}

const Component: React.FC<GameMenuProps> = ({
    sort,
    sortDirection,
    onSortChange,
    onDirectionChange,
    onDownloadClick,
    onAddClick
}) => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            component="div"
            sx={{
                marginTop: '10px'
            }}
        >
            <ButtonGroup
                sx={{
                    marginBottom: '30px'
                }}
            >
                <Button
                    onClick={onAddClick}
                >
                    <Typography>
                        Добавить игру
                    </Typography>
                </Button>
                <Button
                    onClick={onDownloadClick}
                >
                    <Typography>
                        Загрузить список игр
                    </Typography>
                </Button>
            </ButtonGroup>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                component="div"
                sx={{
                    marginLeft: '30px',
                    marginBottom: '30px'
                }}
            >
                <Typography>
                    Сортировка:
                </Typography>
                <Select 
                    value={sort}
                    onChange={onSortChange}
                    sx={{
                        marginLeft: '10px',
                        width: '170px'
                    }}
                >
                    <MenuItem value={'byId'}>По номеру</MenuItem>
                    <MenuItem value={'alphabetically'}>По алфавиту</MenuItem>
                </Select>
                <Select 
                    value={sortDirection}
                    onChange={onDirectionChange}
                    sx={{
                        marginLeft: '10px',
                        width: '170px'
                    }}
                >
                    <MenuItem value={'ascending'}>По возрастанию</MenuItem>
                    <MenuItem value={'descending'}>По убыванию</MenuItem>
                </Select>
            </Box>
        </Box>
    )
}

export const GameMenu = React.memo(Component);