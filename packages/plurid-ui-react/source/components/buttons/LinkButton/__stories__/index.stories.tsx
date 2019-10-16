import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    boolean,
    number,
} from '@storybook/addon-knobs';

import LinkButton from '../';



const actions = {
    atClick: action('atClick'),
};

storiesOf(
    'LinkButton',
    module,
)
.addDecorator(withKnobs)
.add('with text', () => {
    const inline = boolean('Inline', false);
    const level = number('Level', 0);

    return (
        <LinkButton
            theme={themes.light}
            inline={inline}
            level={level}

            text="Link Button"
            {...actions}
        />
    );
});
