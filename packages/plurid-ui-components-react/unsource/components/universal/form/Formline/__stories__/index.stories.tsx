// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import {
        withKnobs,
        boolean,
        number,
        select,
        text,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUIFormline from '../';
    // #endregion external
// #endregion imports



// #region module
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
    'forms',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIFormline', () => {
    const textValue = text('Text', 'formname');

    const Element = () => {
        return (
            <div>
                <input />
            </div>
        );
    }

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    const responsive = boolean('Responsive', false);
    // const devisible = boolean('Devisible', false);

    return (
        <>
            <PluridUIFormline
                text={textValue}

                Element={Element}
                theme={themes[theme]}
                level={level}
                responsive={responsive}
            />
        </>
    );
});
// #endregion module
