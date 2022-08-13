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
        text,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUIFormbutton from '../';
    // #endregion external
// #endregion imports



// #region module
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
    'forms',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIFormbutton', () => {
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
    const link = text('Link', '');
    const devisible = boolean('Devisible', false);

    return (
        <>
            <PluridUIFormbutton
                text={textValue}
                Icon={Icon}

                {...actions}

                theme={themes[theme]}
                level={level}
                link={link}
                devisible={devisible}
            />
        </>
    );
});
// #endregion module
