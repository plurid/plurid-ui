import React from 'react';
import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    boolean,
} from '@storybook/addon-knobs';

import PluridTooltip from '../';

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
    'PluridTooltip',
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

    const indicator = boolean('Indicator', true);

    return (
        <div
            style={{
                // display: 'grid',
                // placeContent: 'center',
            }}
        >
            <p>
                words words
                <PluridTooltip
                icon="?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                theme={themes[theme]}
                size={_size}
                indicator={indicator}
            />
            </p>
        </div>
    );
});
