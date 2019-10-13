import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LinkButton } from '../';



const actions = {
    atClick: action('atClick'),
};

storiesOf(
    'LinkButton',
    module,
).add('with text', () => {
    return (
        <LinkButton
            theme={themes.light}
            text="soo"
            {...actions}
        />
    );
});
