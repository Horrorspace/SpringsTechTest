import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {GamesActions} from '@modules/games/games.actions';
import {gameState, game} from '@modules/games/games.type';


export class GamesReducer {
    private static readonly initialState: gameState = {
        games: [],
        sort: 'byId',
        sortDirection: 'ascending'
    };

    private static buildReducer(builder: ActionReducerMapBuilder<gameState>): void {
        builder
            .addCase(GamesActions.downloadGames.fulfilled, (state, action) => {
                let {games} = state;
                games = games.slice();
                const {length} = games;
                const downloadedGames: game[] = action.payload
                    .filter(d => !games.some(g => g.name === d.name))
                    .map((game, i) => ({
                        ...game,
                        id: length + i + 1
                    }));

                return {
                    ...state,
                    games: [...games, ...downloadedGames]
                };
            })
            .addCase(GamesActions.addGame, (state, action) => {
                let {games} = state;
                games = games.slice();
                const id: number = games.length + 1;
                const game: game = {
                    ...action.payload,
                    id
                };
                games.push(game);
                
                return {
                    ...state,
                    games
                };
            })
            .addCase(GamesActions.deleteGame, (state, action) => {
                const id = action.payload;
                const games = state.games
                    .filter(game => game.id !== id)
                    .map((game, i) => ({
                        ...game,
                        id: i+1
                    }));
                
                return {
                    ...state,
                    games
                };
            })
            .addCase(GamesActions.changeNumber, (state, action) => {
                let {games} = state;
                games = games.slice();

                const {id, direction} = action.payload;
                const {length} = games;
                let swapId: number;
                if(direction === 'up') {
                    swapId = id - 1;
                }
                else {
                    swapId = id + 1;
                }
                if(swapId < 1 || swapId === length + 1) {
                    return state;
                }
                const targetGame: game = {
                    ...games[id-1],
                    id: swapId
                };
                const swapGame: game = {
                    ...games[swapId-1],
                    id
                };
                games[id-1] = swapGame;
                games[swapId-1] = targetGame;
                
                return {
                    ...state,
                    games
                };
            })
            .addCase(GamesActions.sortByAlphabetically, (state, action) => {
                return {
                    ...state,
                    sort: 'alphabetically',
                    sortDirection: action.payload
                };
            })
            .addCase(GamesActions.sortByNumber, (state, action) => {
                return {
                    ...state,
                    sort: 'byId',
                    sortDirection: action.payload
                };
            });
    };

    public static reducer = createReducer(GamesReducer.initialState, GamesReducer.buildReducer);
}