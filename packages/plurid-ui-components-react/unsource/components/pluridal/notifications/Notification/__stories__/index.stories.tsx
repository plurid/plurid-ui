// #region imports
    // #region libraries
    import React from 'react';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        // boolean,
        // number,
        select,
    } from '@storybook/addon-knobs';


    import themes from '@plurid/plurid-themes';

    import {
        Notification as INotification,
    } from '@plurid/plurid-ui-state-react';
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
    const data: INotification = {
        id: 'one',
        text: 'Notification',
        // timeout: 1500,
    };

    return (
        <>
            <Notification
                theme={themes[theme]}
                data={data}
                {...actions as {
                    remove: any,
                }}
            />
        </>
    );
});
// #endregion module
