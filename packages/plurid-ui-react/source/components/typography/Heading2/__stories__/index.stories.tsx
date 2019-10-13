import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Heading2 from '../';



storiesOf(
    'Heading2',
    module,
)
.addDecorator(withKnobs)
.add('simple heading', () => {
    return (
        <Heading2
            theme={themes.light}
        >
            Heading 2
        </Heading2>
    );
});
