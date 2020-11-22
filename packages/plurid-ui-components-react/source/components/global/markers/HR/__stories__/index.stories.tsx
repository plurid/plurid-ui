import React from 'react';

import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
} from '@storybook/addon-knobs';

import PluridHR from '../';

import {
    themeLabel,
    themeOptions,
    defaultThemeValue,
} from '#utilities/storybook';



storiesOf(
    'PluridHR',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const theme = select(themeLabel, themeOptions, defaultThemeValue);

    return (
        <div
            style={{
                backgroundColor: 'slategray',
                height: '100px',
            }}
        >
            aaa

            <PluridHR
                theme={themes[theme]}
            />

            bbb
        </div>
    );
});
