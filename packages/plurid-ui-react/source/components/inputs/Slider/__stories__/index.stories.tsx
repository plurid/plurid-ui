import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    number,
    select,
    text,
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

    const level = number('Level', 0);
    const name = text('Name', '');
    const valueSign = text('Value Sign', '');
    const namedValueAbove = boolean('Show Named Value Above', false);
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
            atChange={() => {}}

            name={name}
            namedValueAbove={namedValueAbove}
            level={level}
            thumbSize={_thumbSize}
            valueSign={valueSign}
        />
    );
})
.add('floating point', () => {
    const value = number('Value', 50);
    const valueRight = boolean('Show Value Right', false);

    return (
        <Slider
            theme={themes.light}
            step={0.1}
            min={0}
            max={100}
            value={value}
            defaultValue={70}
            valueRight={valueRight}
            atChange={() => {}}
        />
    );
});
