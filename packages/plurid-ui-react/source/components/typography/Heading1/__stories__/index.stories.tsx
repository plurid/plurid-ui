import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Heading1 from '../';



storiesOf(
    'Heading1',
    module,
)
.addDecorator(withKnobs)
.add('simple heading', () => {
    return (
        <Heading1
            theme={themes.light}
        >
            Heading 1
        </Heading1>
    );
});
