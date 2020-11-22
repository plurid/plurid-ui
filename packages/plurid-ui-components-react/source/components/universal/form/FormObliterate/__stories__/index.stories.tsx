import React from 'react';

import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';

import PluridFormObliterate from '../';



const actions = {
    atObliterate: action('atObliterate'),
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
    'PluridFormObliterate',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const item = text('Item', 'formname');

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    const devisible = boolean('Devisible', false);

    return (
        <>
            <PluridFormObliterate
                item={item}

                {...actions}

                theme={themes[theme]}
                level={level}
                devisible={devisible}
            />
        </>
    );
});
