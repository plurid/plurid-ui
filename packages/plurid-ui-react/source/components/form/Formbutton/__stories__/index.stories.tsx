import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    // boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';

import PluridFormbutton from '../';



const actions = {
    atClick: action('atClick'),
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
    'PluridFormbutton',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const textValue = text('Text', 'formname');
    const Icon = () => {
        return (
            <div>
                icon
            </div>
        );
    }

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    // const devisible = boolean('Devisible', false);

    return (
        <>
            <PluridFormbutton
                text={textValue}
                Icon={Icon}

                {...actions}

                theme={themes[theme]}
                level={level}
            />
        </>
    );
});
