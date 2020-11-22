// #region imports
    // #region libraries
    import React from 'react';

    import {
        storiesOf,
    } from '@storybook/react';
    import {
        withKnobs,
        text,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUIScrollableLine from '../';
    // #endregion external
// #endregion imports



// #region module
storiesOf(
    'varia',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIScrollableLine', () => {
    const textValue = text('Text', '');

    return (
        <>
            <PluridUIScrollableLine
                text={textValue}
            />
        </>
    );
});
// #endregion module
