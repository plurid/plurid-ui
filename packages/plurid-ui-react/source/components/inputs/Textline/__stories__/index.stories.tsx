import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import PluridTextline from '../';



const actions = {
    atChange: action('atChange'),
};

storiesOf(
    'PluridTextline',
    module,
)
.addDecorator(withKnobs)
.add('not checked', () => {
    const round = boolean('Round', true);
    const level = number('Level', 0);

    return (
        <PluridTextline
            theme={themes.depict}
            level={level}
            round={round}
            {...actions}
        />
    );
});