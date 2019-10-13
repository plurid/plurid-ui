import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Switch } from '../';



const actions = {
    atChange: action('atChange'),
};

storiesOf(
    'Switch',
    module,
)
.add('not checked', () => {
    return (
        <Switch
            theme={themes.depict}
            checked={false}
            {...actions}
        />
    );
})
.add('checked', () => {
    return (
        <Switch
            theme={themes.depict}
            checked={true}
            {...actions}
        />
    );
});
