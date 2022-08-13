// #region imports
    // #region libraries
    import React from 'react';

    // import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        boolean,
        // number,
        // select,
        // text,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUIItemsline from '../';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    removeItem: action('removeItem'),
};

// const themeLabel = 'Theme';
// const computeThemeOptions = () => {
//     const options: any = {};
//     for (const key of Object.keys(themes)) {
//         options[key] = key;
//     }
//     return options;
// }
// const themeOptions = computeThemeOptions();
// const defaultThemeValue = 'plurid';

storiesOf(
    'inputs',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIItemsline', () => {
    // const theme = select(themeLabel, themeOptions, defaultThemeValue);
    // const level = number('Level', 0);
    const left = boolean('Left', false);

    return (
        <>
            <PluridUIItemsline
                items={['one', 'two', 'three']}
                {...actions}

                left={left}
            />
        </>
    );
});
// #endregion module
