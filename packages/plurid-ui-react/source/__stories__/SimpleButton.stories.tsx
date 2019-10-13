import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SimpleButton } from '../';



const actions = {
    atClick: action('atClick'),
};

storiesOf(
    'SimpleButton',
    module,
).add('with text', () => {
    return (
        <SimpleButton
            theme={themes.depict}
            text="soo"
            {...actions}
        />
    );
});
