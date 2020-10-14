import React, {
    useState,
} from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';

import PluridTextline from '../';



const actions = {
    // atChange: action('atChange'),
    // enterAtClick: action('enterAtClick'),
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
    const [
        textValue,
        setTextValue,
    ] = useState('');

    // const textValue = text('Text', '');

    const autoCorrect = text('AutoCorrect', '');
    const spellCheck = boolean('SpellCheck', false);

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    const devisible = boolean('Devisible', false);
    const center = boolean('Center', false);
    const round = boolean('Round', true);

    const enterIconLeft = boolean('Enter Icon Left', false);
    const escapeClear = boolean('Escape Clear', false);

    return (
        <PluridTextline
            text={textValue}
            atChange={(event: any) => setTextValue(event.target.value)}

            placeholder="placeholder"
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}

            theme={themes[theme]}
            devisible={devisible}
            center={center}
            level={level}
            round={round}

            enterIconLeft={enterIconLeft}
            escapeClear={escapeClear}

            enterAtClick={() => {
                console.log('enter');
            }}

            {...actions}
        />
    );
});