// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        boolean,
        number,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import LinkButton from '../';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    atClick: action('atClick'),
};

storiesOf(
    'PluridLinkButton',
    module,
)
.addDecorator(withKnobs)
.add('with text', () => {
    const level = number('Level', 0);
    const inline = boolean('Inline', false);
    const disabled = boolean('Disabled', false);
    const loading = boolean('Loading', false);
    const active = boolean('Active', false);

    return (
        <LinkButton
            {...actions}

            text="Link Button"

            theme={themes.light}
            level={level}
            inline={inline}
            disabled={disabled}
            loading={loading}
            active={active}
        />
    );
});
// #endregion module
