import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';

import PluridTextline from '../';



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
    'PluridTextline',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const round = boolean('Round', true);
    const level = number('Level', 0);
    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const textValue = text('Text', '');

    return (
        <PluridTextline
            text={textValue}
            placeholder="foo"
            theme={themes[theme]}
            level={level}
            round={round}
            {...actions}
        />
    );
});