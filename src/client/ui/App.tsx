import React from 'react';
import {Main} from '@ui/pages/main.page';
import {compose} from 'redux';
import {withProvider} from '@ui/HOCs/withProvider';
 

export const App: React.FC = () => {
    const Component = compose<React.FC>(
        withProvider
    )(Main)
    
    return (
        <>
            <Component />
        </>
    )
}
