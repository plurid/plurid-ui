import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    number,
    select,
} from '@storybook/addon-knobs';

import Slider from '../';


const label = 'Size';
const options = {
    small: 'small',
    normal: 'normal',
    large: 'large',
    none: null,
};
const defaultValue = 'normal';

storiesOf(
    'Slider',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const value = number('Value', 50);
    const showValue = boolean('Show Value', false);
    const thumbSize = select(label, options, defaultValue);
    const _thumbSize = thumbSize === 'small'
        || thumbSize === 'normal'
        || thumbSize === 'large'
            ? thumbSize
            : 'normal';

    return (
        <Slider
            theme={themes.light}
            min={0}
            max={100}
            value={value}
            defaultValue={70}
            showValue={showValue}
            atChange={() => {}}

            thumbSize={_thumbSize}
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
