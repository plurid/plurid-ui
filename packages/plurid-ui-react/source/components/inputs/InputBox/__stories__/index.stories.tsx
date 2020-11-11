import React, {
    useState,
} from 'react';

import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    select,
    text,
} from '@storybook/addon-knobs';

import InputBox from '../';



const actions = {
    // atChange: action('atChange'),
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
    'PluridInputBox',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const [
        textValue,
        setTextValue,
    ] = useState('');

    // const textValue = text('Text', '');

    const name = text('Name', '');

    const theme = select(themeLabel, themeOptions, defaultThemeValue);

    return (
        <InputBox
            name={name}
            text={textValue}
            atChange={(event: any) => setTextValue(event.target.value)}

            theme={themes[theme]}

            {...actions}
        />
    );
});
