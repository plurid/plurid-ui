import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import Slider from '../';



storiesOf(
    'Slider',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const value = number('Value', 50);
    const showValue = boolean('Show Value', false);

    return (
        <Slider
            theme={themes.light}
            min={0}
            max={100}
            value={value}
            defaultValue={70}
            showValue={showValue}
            atChange={() => {}}
        />
    );
})
.add('floating point', () => {
    const value = number('Value', 50);
    const showValue = boolean('Show Value', false);

    return (
        <Slider
            theme={themes.light}
            step={0.1}
            min={0}
            max={100}
            value={value}
            defaultValue={70}
            showValue={showValue}
            atChange={() => {}}
        />
    );
});
