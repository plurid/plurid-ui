import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import PureButton from '../';



const actions = {
    atClick: action('atClick'),
};

storiesOf(
    'PureButton',
    module,
)
.addDecorator(withKnobs)
.add('with text', () => {
    const level = number('Level', 0);
    const _text = text('Text', 'Pure Button');

    return (
        <PureButton
            theme={themes.depict}
            text={_text}
            level={level}
            {...actions}
        />
    );
});
