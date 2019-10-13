import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Heading3 from '../';



storiesOf(
    'Heading3',
    module,
)
.addDecorator(withKnobs)
.add('simple heading', () => {
    return (
        <Heading3
            theme={themes.light}
        >
            Heading 3
        </Heading3>
    );
});
