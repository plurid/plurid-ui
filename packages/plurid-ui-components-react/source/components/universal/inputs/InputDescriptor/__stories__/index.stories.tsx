// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    // import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        text,
        boolean,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUIInputDescriptor from '..';

    import {
        themeSelect,
        Background,
    } from '#utilities/storybook';
    // #endregion external
// #endregion imports



// #region module
const actions = {
};

storiesOf(
    'inputs',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIInputDescriptor', () => {
    const name = text('Name', '');
    const show = boolean('Show', false);
    const theme = themeSelect();

    return (
        <Background>
            <PluridUIInputDescriptor
                // #region required
                    // #region values
                    name={name}
                    show={show}
                    theme={themes[theme]}
                    // #endregion values
                // #endregion required
            />
        </Background>
    );
});
// #endregion module
