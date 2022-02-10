export interface gameResponse {
    name: string;
    icon_url: string;
}

export interface game {
    name: string;
    icon_url: string;
    id: number;
}

export interface gameState {
    games: game[];
    sort: sort;
    sortDirection: sortOption;
}

export type sortOption = 'ascending' | 'descending';

export type changeDirection = 'up' | 'down';

export type sort = 'alphabetically' | 'byId';

export interface changeGameId {
    id: number;
    direction: changeDirection
}