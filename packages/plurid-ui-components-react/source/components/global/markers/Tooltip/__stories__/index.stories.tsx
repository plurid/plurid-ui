import React from 'react';
import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    boolean,
    text,
} from '@storybook/addon-knobs';

import PluridTooltip from '../';

import {
    themeLabel,
    themeOptions,
    defaultThemeValue,
} from '#utilities/storybook';



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
    const indicator = boolean('Indicator', true);
    const icon = boolean('Icon', true);
    const tool = text('Tool', '?');
    const tip = text('Tip', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    return (
        <div
            style={{
            }}
        >
            <p>
                words words&nbsp;

                <PluridTooltip
                    tool={tool}
                    tip={tip}
                    theme={themes[theme]}
                    indicator={indicator}
                    icon={icon}
                />
            </p>
        </div>
    );
});
