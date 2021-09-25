// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import {
        storiesOf,
    } from '@storybook/react';
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
    } from '~utilities/storybook';

    import PluridUISpinner from '../';
    // #endregion external
// #endregion imports



// #region module
const label = 'Size';
const options = {
    small: 'small',
    normal: 'normal',
    large: 'large',
    none: null,
};
const defaultValue = 'normal';

storiesOf(
    'markers',
    module,
)
.addDecorator(withKnobs)
.add('PluridUISpinner', () => {
    const theme = select(themeLabel, themeOptions, defaultThemeValue);

    const size = select(label, options, defaultValue);
    const _size = size === 'small'
        || size === 'normal'
        || size === 'large'
            ? size
            : 'normal';

    return (
        <div
            style={{
                backgroundColor: 'slategray',
                height: '200px',
                position: 'relative',
                display: 'grid',
                placeContent: 'center',
            }}
        >
            <PluridUISpinner
                theme={themes[theme]}
                size={_size}
            />
        </div>
    );
});
// #endregion module
