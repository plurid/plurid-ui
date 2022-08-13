// #region imports
    // #region module
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        text,
        number,
        boolean,
    } from '@storybook/addon-knobs';
    // #endregion module


    // #region external
    import PluridUIRefreshButton from '..';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    atClick: action('atClick'),
};

storiesOf(
    'buttons',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIRefreshButton', () => {
    const _text = text('Text', '');
    const disabled = boolean('Disabled', false);
    const hideAtClick = boolean('Hide At Click', false);
    const hideTime = number('Hide Time', 0);

    return (
        <div
            style={{
                background: 'black',
                height: '1000px',
            }}
        >
            <PluridUIRefreshButton
                // #region required
                    // #region values
                    // #endregion values

                    // #region methods
                    {...actions}
                    // #endregion methods
                // #endregion required

                // #region optional
                    // #region values
                    theme={themes.plurid}
                    text={_text}
                    disabled={disabled}
                    hideAtClick={hideAtClick}
                    hideTime={hideTime}
                    // #endregion values

                    // #region methods
                    // #endregion methods
                // #endregion optional
            />
        </div>
    );
});
// #endregion module
