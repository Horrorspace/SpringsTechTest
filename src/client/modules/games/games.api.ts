import {AbstractAPI, urlMethods} from '@api/abstract.api';
import {gameResponse} from '@modules/games/games.type';


interface response {
    data: gameResponse[];
}


export class GamesAPI extends AbstractAPI {
    public async getAllGames(): Promise<gameResponse[]> {
        const res: response = await this.request({
            path: `/817eebf87e3033d5dc99`,
            method: urlMethods.get,
        });
        return res.data;
    }
}