import React from 'react';
import {Box} from '@mui/material';
import {GameItem, btnClickHandler} from '@ui/components/game-item';
import {gameState} from '@modules/games/games.type';

type actionGameHandler = (id: number) => void

interface GamesListProps extends gameState {
    onMoveUp: actionGameHandler;
    onMoveDown: actionGameHandler;
    onGameDelete: actionGameHandler;
}


const Component: React.FC<GamesListProps> = ({
    games,
    sort,
    sortDirection,
    onMoveUp,
    onMoveDown,
    onGameDelete
}) => {
    const getParent = (e: HTMLElement): HTMLButtonElement => {
        if(e.tagName === 'BUTTON') {
            return e as HTMLButtonElement;
        }
        else {
            return getParent(e.parentElement!);
        }
    }

    const isMoveDisabled = sort !== 'byId';

    const deleteHandler: btnClickHandler = (e) => {
        const target = e.target as HTMLElement;
        const btn = getParent(target);
        const id = parseInt(btn.id, 10);
        onGameDelete(id);
    };

    const moveUpHandler: btnClickHandler = (e) => {
        const target = e.target as HTMLElement;
        const btn = getParent(target);
        const id = parseInt(btn.id, 10);
        if(sortDirection === 'ascending') {
            onMoveUp(id);
        }
        else {
            onMoveDown(id);
        }
    };

    const moveDownHandler: btnClickHandler = (e) => {
        const target = e.target as HTMLElement;
        const btn = getParent(target);
        const id = parseInt(btn.id, 10);
        if(sortDirection === 'ascending') {
            onMoveDown(id);
        }
        else {
            onMoveUp(id);
        }
    };

    const list = [...games]
        .sort((a, b) => {
            switch(sort) {
                case 'byId':
                    if(sortDirection === 'ascending') {
                        return a.id - b.id
                    }
                    else {
                        return b.id - a.id
                    }
                case 'alphabetically':
                    if(sortDirection === 'ascending') {
                        return new Intl.Collator().compare(a.name, b.name);
                    }
                    else {
                        return new Intl.Collator().compare(b.name, a.name);
                    }
                default:
                    return 0;
            }
        })
        .map(game => {
            return (
                <>
                    <GameItem 
                        id={game.id}
                        iconUrl={game.icon_url}
                        name={game.name}
                        isMoveDisabled={isMoveDisabled}
                        onUpBtnCLick={moveUpHandler}
                        onDownBtnClick={moveDownHandler}
                        onDeleteClick={deleteHandler}
                    />
                </>
            )
        })

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            component="ul"
        >
            {list}
        </Box>
    )
}

export const GamesList = React.memo(Component);