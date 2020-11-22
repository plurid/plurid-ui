// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import {
        withKnobs,
        select,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import {
        themeLabel,
        themeOptions,
        defaultThemeValue,
    } from '#utilities/storybook';

    import PluridUIHR from '../';
    // #endregion external
// #endregion imports



storiesOf(
    'markers',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIHR', () => {
    const theme = select(themeLabel, themeOptions, defaultThemeValue);

    return (
        <div
            style={{
                backgroundColor: 'slategray',
                height: '100px',
            }}
        >
            aaa

            <PluridUIHR
                theme={themes[theme]}
            />

            bbb
        </div>
    );
});
