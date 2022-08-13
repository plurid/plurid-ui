// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import { withKnobs, boolean, number } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import PluridUISwitch from '../';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    atChange: action('atChange'),
};

storiesOf(
    'inputs',
    module,
)
.addDecorator(withKnobs)
.add('PluridUISwitch', () => {
    const checked = boolean('Checked', false);
    const exclusive = boolean('Exclusive', false);
    const round = boolean('Round', true);
    const level = number('Level', 0);

    return (
        <PluridUISwitch
            theme={themes.depict}
            checked={checked}
            exclusive={exclusive}
            level={level}
            round={round}
            {...actions}
        />
    );
});
// #endregion module
