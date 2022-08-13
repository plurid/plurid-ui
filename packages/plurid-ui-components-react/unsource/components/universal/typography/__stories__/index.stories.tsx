// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { withKnobs } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import Heading from '../Heading';
    import Paragraph from '../Paragraph';
    // #endregion external
// #endregion imports



// #region module
storiesOf(
    'typography',
    module,
)
.addDecorator(withKnobs)
.add('Heading and Paragraph', () => {
    return (
        <div>
            <Heading
                theme={themes.light}
                type="h1"
            >
                Heading 1
            </Heading>

            <Heading
                theme={themes.light}
                type="h2"
            >
                Heading 2
            </Heading>

            <Heading
                theme={themes.light}
                type="h3"
            >
                Heading 3
            </Heading>

            <Paragraph
                theme={themes.light}
            >
                Paragraph lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
            </Paragraph>
        </div>
    );
});
// #endregion module
