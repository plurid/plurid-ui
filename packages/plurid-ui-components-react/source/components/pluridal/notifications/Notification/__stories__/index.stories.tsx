// #region imports
    // #region libraries
    import React from 'react';

    import {
        notifications,
    } from '@plurid/plurid-ui-state-react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        // boolean,
        // number,
        select,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import Notification from '..';

    import {
        themeLabel,
        themeOptions,
        defaultThemeValue,
    } from '~utilities/storybook';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    remove: action('remove notification'),
};

storiesOf(
    'Notification',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const data: notifications.Types.Notification = {
        id: 'one',
        text: 'Notification',
        // timeout: 1500,
    };

    return (
        <>
            <Notification
                theme={themes[theme]}
                data={data}
                {...actions}
            />
        </>
    );
});
// #endregion module
