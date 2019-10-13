import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import Switch from '../';



const actions = {
    atChange: action('atChange'),
};

storiesOf(
    'Switch',
    module,
)
.addDecorator(withKnobs)
.add('not checked', () => {
    const checked = boolean('Checked', false);
    const round = boolean('Round', true);
    const level = number('Level', 0);

    return (
        <Switch
            theme={themes.depict}
            checked={checked}
            level={level}
            round={round}
            {...actions}
        />
    );
})
.add('checked', () => {
    const checked = boolean('Checked', false);
    const round = boolean('Round', true);
    const level = number('Level', 0);

    return (
        <Switch
            theme={themes.depict}
            checked={checked}
            level={level}
            round={round}
            {...actions}
        />
    );
});
