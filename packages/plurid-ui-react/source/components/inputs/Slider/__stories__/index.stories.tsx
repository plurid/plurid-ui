import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import Slider from '../';



const actions = {
    atChange: action('atChange'),
};

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
            name="name"
            handleInput={() => {}}
            {...actions}
        />
    );
})
.add('floating point', () => {
    const value = number('Value', 50);
    const showValue = boolean('Show Value', false);

    return (
        <Slider
            theme={themes.light}
            min={0}
            max={100}
            value={value}
            defaultValue={70}
            step={0.1}
            showValue={showValue}
            name="name"
            handleInput={() => {}}
            {...actions}
        />
    );
});
