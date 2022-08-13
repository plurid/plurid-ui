// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import {
        storiesOf,
     } from '@storybook/react';
    import {
        withKnobs,
        select,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUIParagraph from '../';
    // #endregion external
// #endregion imports



// #region module
const label = 'Size';
const options = {
    small: 'small',
    normal: 'normal',
    large: 'large',
    none: null,
};
const defaultValue = 'normal';

storiesOf(
    'typography',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIParagraph', () => {
    const size = select(label, options, defaultValue);
    const _size = size === 'small'
        || size === 'normal'
        || size === 'large'
            ? size
            : 'normal';

    return (
        <PluridUIParagraph
            theme={themes.light}
            size={_size}
        >
            Paragraph lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id nam hic itaque, obcaecati recusandae, sit vel expedita repudiandae autem eius amet? Ut facere, vero delectus error fugit nobis consequuntur.
        </PluridUIParagraph>
    );
});
// #endregion module
