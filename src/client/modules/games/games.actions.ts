import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {GamesActTypes} from '@modules/games/games.action-types';
import {sortOption, game, gameResponse, changeGameId} from '@modules/games/games.type';
import {GamesAPI} from '@modules/games/games.api';


export class GamesActions {
    private static async  downloadGamesThunk(): Promise<gameResponse[]> {
        const api = new GamesAPI();
        return await api.getAllGames();
    }

    public static downloadGames = createAsyncThunk<gameResponse[], void>(GamesActTypes.download, GamesActions.downloadGamesThunk);

    public static addGame = createAction<gameResponse, GamesActTypes>(GamesActTypes.addGame);

    public static deleteGame = createAction<number, GamesActTypes>(GamesActTypes.deleteGame);

    public static changeNumber = createAction<changeGameId, GamesActTypes>(GamesActTypes.changeNumber);

    public static sortByAlphabetically = createAction<sortOption, GamesActTypes>(GamesActTypes.sortByAlphabetically);

    public static sortByNumber = createAction<sortOption, GamesActTypes>(GamesActTypes.sortByNumber);
}
