import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    number,
    select,
} from '@storybook/addon-knobs';

import PureButton from '../';



const actions = {
    atClick: action('atClick'),
};

const label = 'Size';
const options = {
    small: 'small',
    normal: 'normal',
    large: 'large',
    none: null,
};
const defaultValue = 'normal';

storiesOf(
    'PluridPureButton',
    module,
)
.addDecorator(withKnobs)
.add('with text', () => {
    const level = number('Level', 0);
    const _text = text('Text', 'Pure Button');
    const size = select(label, options, defaultValue);
    const _size = size === 'small'
        || size === 'normal'
        || size === 'large'
            ? size
            : 'normal';

    return (
        <PureButton
            theme={themes.depict}
            text={_text}
            level={level}
            size={_size}
            {...actions}
        />
    );
});
