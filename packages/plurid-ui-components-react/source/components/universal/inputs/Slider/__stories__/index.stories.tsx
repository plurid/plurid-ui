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
    'PluridSlider',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const value = number('Value', 50);

    const name = text('Name', '');
    const level = number('Level', 0);
    const thumbSize = select(label, options, defaultValue);
    const _thumbSize = thumbSize === 'small'
        || thumbSize === 'normal'
        || thumbSize === 'large'
            ? thumbSize
            : 'normal';
    const width = number('Width', 100);
    const valueSign = text('Value Sign', '');
    const namedValueAbove = boolean('Show Named Value Above', false);

    return (
        <Slider
            value={value}
            atChange={() => {}}

            defaultValue={70}
            min={0}
            max={100}
            name={name}
            theme={themes.light}
            level={level}
            thumbSize={_thumbSize}
            width={width}
            valueSign={valueSign}
            namedValueAbove={namedValueAbove}
        />
    );
})
.add('floating point', () => {
    const value = number('Value', 50);

    const name = text('Name', '');
    const level = number('Level', 0);
    const thumbSize = select(label, options, defaultValue);
    const _thumbSize = thumbSize === 'small'
        || thumbSize === 'normal'
        || thumbSize === 'large'
            ? thumbSize
            : 'normal';
    const width = number('Width', 100);
    const valueSign = text('Value Sign', '');
    const namedValueAbove = boolean('Show Named Value Above', false);

    return (
        <Slider
            value={value}
            atChange={() => {}}

            defaultValue={70}
            min={0}
            max={100}
            step={0.1}
            name={name}
            theme={themes.light}
            level={level}
            thumbSize={_thumbSize}
            width={width}
            valueSign={valueSign}
            namedValueAbove={namedValueAbove}
        />
    );
});
