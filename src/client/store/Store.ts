import {configureStore, Reducer, combineReducers} from '@reduxjs/toolkit';
import {gameState} from '@modules/games/games.type';
import {GamesReducer} from '@modules/games/games.reducer';



export interface IRootState {
    games: gameState
}

export class Store {
    private static readonly reducer: Reducer<IRootState> = combineReducers({
        games: GamesReducer.reducer,
    });
    
    public static readonly value = configureStore({
        reducer: Store.reducer,
    });
}