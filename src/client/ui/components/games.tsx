import React, {useState} from 'react';
import {ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import {IRootState} from '@store/Store';
import {GamesActTypes} from '@modules/games/games.action-types';
import {gameState, sort, sortOption} from '@modules/games/games.type';
import {GamesList} from '@ui/components/games-list';
import {GameAddModal, addHandler} from '@ui/components/game-add-modal';
import {GameExistModal} from '@ui/components/game-exist-modal';
import {GameMenu, selectChangeHandler} from '@ui/components/game-menu';
import {GamesActions} from '@modules/games/games.actions';



interface GamesState {
    addModalShow: boolean;
    existModalShow: boolean;
}


export const Games: React.FC = () => {
    const dispatch = useDispatch();
    const gameState = useSelector<IRootState, gameState> (state => state.games);
    const {games, sort, sortDirection} = gameState;

    const initState: GamesState = {
        addModalShow: false,
        existModalShow: false
    }
    const [state, setState] = useState(initState);

    const getSortAction = (sort: sort): ActionCreatorWithPayload<sortOption, GamesActTypes> | null => {
        switch(sort) {
            case 'alphabetically':
                return GamesActions.sortByAlphabetically;
            case 'byId':
                return GamesActions.sortByNumber;
            default:
                return null;
        }
    }

    const handleDownload = () => {
        dispatch(GamesActions.downloadGames());
    }

    const handleMoveUp = (id: number) => {
        if(sort === 'byId') {
            dispatch(GamesActions.changeNumber({
                id,
                direction: 'up'
            }));
        }
    }

    const handleMoveDown = (id: number) => {
        if(sort === 'byId') {
            dispatch(GamesActions.changeNumber({
                id,
                direction: 'down'
            }));
        }
    }

    const handleDelete = (id: number) => {
        dispatch(GamesActions.deleteGame(id));
    }

    const handleSortChange: selectChangeHandler<sort> = (e) => {
        const value = e.target.value as sort;
        switch(value) {
            case 'alphabetically':
                dispatch(GamesActions.sortByAlphabetically(sortDirection));
                break;
            case 'byId':
                dispatch(GamesActions.sortByNumber(sortDirection));
                break;
        }
    }

    const handleDirectionChange: selectChangeHandler<sortOption> = (e) => {
        const action = getSortAction(sort);
        if(action) {
            const value = e.target.value as sortOption;
            dispatch(action(value));
        }
    }

    const handleOpenModal = () => {
        setState(prev => ({
            ...prev,
            addModalShow: true
        }));
    }

    const handleAddGame: addHandler = (game) => {
        setState(prev => ({
            ...prev,
            addModalShow: false
        }));
        if(!games.some(g => g.name === game.name)) {
            dispatch(GamesActions.addGame(game));
        }
        else {
            setState(prev => ({
                ...prev,
                existModalShow: true
            }));
        }
    }

    const handleCloseModal = () => {
        setState(prev => ({
            ...prev,
            addModalShow: false
        }));
    }

    const handleCloseAlert = () => {
        setState(prev => ({
            ...prev,
            existModalShow: false
        }));
    }
    
    return (
        <>
            <GameMenu 
                sort={sort}
                sortDirection={sortDirection}
                onAddClick={handleOpenModal}
                onDownloadClick={handleDownload}
                onSortChange={handleSortChange}
                onDirectionChange={handleDirectionChange}
            />
            <GamesList 
                games={games}
                sort={sort}
                sortDirection={sortDirection}
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
                onGameDelete={handleDelete}
            />
            <GameAddModal 
                show={state.addModalShow}
                onAdd={handleAddGame}
                onClose={handleCloseModal}
            />
            <GameExistModal 
                show={state.existModalShow}
                onClose={handleCloseAlert}
            />
        </>
    )
}