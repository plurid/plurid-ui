import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    number,
    select,
    boolean,
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
    const _text = text('Text', 'Pure Button');

    const level = number('Level', 0);
    const size = select(label, options, defaultValue);
    const _size = size === 'small'
        || size === 'normal'
        || size === 'large'
            ? size
            : 'normal';
    const disabled = boolean('Disabled', false);
    const loading = boolean('Loading', false);

    return (
        <PureButton
            text={_text}
            {...actions}

            theme={themes.depict}
            level={level}
            size={_size}
            disabled={disabled}
            loading={loading}
        />
    );
});
