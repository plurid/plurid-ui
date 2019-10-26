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
    const textValue = text('Text', '');

    const autoCorrect = text('AutoCorrect', '');
    const spellCheck = boolean('SpellCheck', false);

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    const devisible = boolean('Devisible', false);
    const center = boolean('Center', false);
    const round = boolean('Round', true);

    const enterIcon = boolean('Enter Icon', false);
    const escapeClear = boolean('Escape Clear', false);

    return (
        <PluridTextline
            text={textValue}

            placeholder="placeholder"
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}

            theme={themes[theme]}
            devisible={devisible}
            center={center}
            level={level}
            round={round}

            enterIcon={enterIcon}
            escapeClear={escapeClear}

            {...actions}
        />
    );
});