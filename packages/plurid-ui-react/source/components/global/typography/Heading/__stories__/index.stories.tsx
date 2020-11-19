import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Heading from '../';



storiesOf(
    'PluridHeading',
    module,
)
.addDecorator(withKnobs)
.add('h1', () => {
    return (
        <Heading
            theme={themes.light}
            type="h1"
        >
            Heading 1
        </Heading>
    );
})
.add('h2', () => {
    return (
        <Heading
            theme={themes.light}
            type="h2"
        >
            Heading 2
        </Heading>
    );
})
.add('h3', () => {
    return (
        <Heading
            theme={themes.light}
            type="h3"
        >
            Heading 3
        </Heading>
    );
});
