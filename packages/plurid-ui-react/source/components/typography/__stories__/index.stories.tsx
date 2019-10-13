import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Heading1 from '../Heading1';
import Heading2 from '../Heading2';
import Heading3 from '../Heading3';
import Paragraph from '../Paragraph';



storiesOf(
    'Typography',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    return (
        <div>
            <Heading1
                theme={themes.light}
            >
                Heading 1
            </Heading1>

            <Heading2
                theme={themes.light}
            >
                Heading 2
            </Heading2>

            <Heading3
                theme={themes.light}
            >
                Heading 3
            </Heading3>

            <Paragraph
                theme={themes.light}
            >
                Paragraph lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
            </Paragraph>
        </div>
    );
});
