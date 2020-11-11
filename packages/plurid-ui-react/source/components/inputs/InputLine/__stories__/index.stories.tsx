// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    // import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        select,
        text,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import InputLine from '../';
    // #endregion external
// #endregion imports



// #region module
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
    'PluridInputLine',
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
        <div
            style={{
                backgroundColor: 'slategray',
                padding: '2rem',
            }}
        >
            <InputLine
                name={name}
                text={textValue}
                atChange={(event: any) => setTextValue(event.target.value)}

                theme={themes[theme]}

                {...actions}
            />
        </div>
    );
});
// #endregion module
