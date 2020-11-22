import React from 'react';
// import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    // boolean,
    // number,
    // select,
    text,
} from '@storybook/addon-knobs';

import PluridScrollableLine from '../';



// const themeLabel = 'Theme';
// const computeThemeOptions = () => {
//     const options: any = {};
//     for (const key of Object.keys(themes)) {
//         options[key] = key;
//     }
//     return options;
// }
// const themeOptions = computeThemeOptions();
// const defaultThemeValue = 'plurid';

storiesOf(
    'PluridScrollableLine',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    // const theme = select(themeLabel, themeOptions, defaultThemeValue);
    // const level = number('Level', 0);
    const textValue = text('Text', '');

    return (
        <>
            <PluridScrollableLine
                text={textValue}
            />
        </>
    );
});
