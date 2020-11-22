// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        boolean,
        number,
        select,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUISelect from '../';
    // #endregion external
// #endregion imports




const actions = {
    atChange: action('atChange'),
};

const themeLabel = 'Theme';
const computeThemeOptions = () => {
    const options: any = {};
    for (const key of Object.keys(themes)) {
        options[key] = key;
    }
    return options;
}
const themeOptions = computeThemeOptions();
const defaultThemeValue = 'plurid';

storiesOf(
    'inputs',
    module,
)
.addDecorator(withKnobs)
.add('PluridUISelect', () => {
    const selectables = [
        'One',
        'Two',
        'Three'
    ];

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    const devisible = boolean('Devisible', false);
    const round = boolean('Round', true);

    return (
        <PluridUISelect
            selectables={selectables}

            theme={themes[theme]}
            devisible={devisible}
            level={level}
            round={round}
            {...actions}
        />
    );
});