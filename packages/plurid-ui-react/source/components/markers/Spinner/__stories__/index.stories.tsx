import React from 'react';
import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
} from '@storybook/addon-knobs';

import PluridSpinner from '../';

import {
    themeLabel,
    themeOptions,
    defaultThemeValue,
} from '../../../../utilities/storybook';



const label = 'Size';
const options = {
    small: 'small',
    normal: 'normal',
    large: 'large',
    none: null,
};
const defaultValue = 'normal';

storiesOf(
    'PluridSpinner',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const theme = select(themeLabel, themeOptions, defaultThemeValue);

    const size = select(label, options, defaultValue);
    const _size = size === 'small'
        || size === 'normal'
        || size === 'large'
            ? size
            : 'normal';

    return (
        <PluridSpinner
            theme={themes[theme]}
            size={_size}
        />
    );
});
