// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import {
        storiesOf,
    } from '@storybook/react';
    import {
        withKnobs,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUIHeading from '../';
    // #endregion external
// #endregion imports



// #region module
storiesOf(
    'typography',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIHeading', () => {
    return (
        <PluridUIHeading
            theme={themes.light}
            type="h1"
        >
            Heading 1
        </PluridUIHeading>
    );
})
// #endregion module
