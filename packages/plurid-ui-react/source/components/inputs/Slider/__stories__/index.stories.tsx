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

    return (
        <Slider
            theme={themes.light}
            min={0}
            max={100}
            value={value}
            defaultValue={70}
            name="name"
            handleInput={() => {}}
            {...actions}
        />
    );
});
