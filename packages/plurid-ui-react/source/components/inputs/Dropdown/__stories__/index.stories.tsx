import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    select,
    boolean,
    number,
} from '@storybook/addon-knobs';

import PluridDropdown from '../';

import {
    themeLabel,
    themeOptions,
    defaultThemeValue,
} from '../../../../utilities/storybook';



const actions = {
    atChange: action('atChange'),
};

storiesOf(
    'PluridDropdown',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const selectables = [
        'One',
        'Two',
        'Three'
    ];

    const selectablesItems = [
        {
            id: '1_MONTH',
            value: '1 Month',
        },
        {
            id: '1_YEAR',
            value: '1 Year',
        },
        {
            id: '100_YEARS',
            value: '100 Years',
        },
    ];

    const left = boolean('Left', false);

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    // const devisible = boolean('Devisible', false);
    // const round = boolean('Round', true);

    return (
        <PluridDropdown
            selectables={selectablesItems}
            selected={selectablesItems[0]}
            atSelect={(selected) => {console.log(selected)}}

            left={left}

            theme={themes[theme]}
            level={level}
            // devisible={devisible}
            // round={round}
            {...actions}
        />
    );
});