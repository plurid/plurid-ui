// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    // import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        text,
        boolean,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import InputLine from '../';

    import {
        themeSelect,
        Background,
    } from '../../../../utilities/storybook';
    // #endregion external
// #endregion imports



// #region module
const actions = {
};

storiesOf(
    'PluridInputLine',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const [
        textValue,
        setTextValue,
    ] = useState('');

    const name = text('Name', '');
    const theme = themeSelect();
    const error = boolean('Error', false);

    return (
        <Background>
            <InputLine
                // #region required
                    // #region values
                    name={name}
                    text={textValue}
                    // #endregion values

                    // #region methods
                    atChange={(event: any) => setTextValue(event.target.value)}
                    // #endregion methods
                // #endregion required

                // #region optional
                    // #region values
                    theme={themes[theme]}
                    error={error}
                    // #endregion values

                    // #region methods
                    {...actions}
                    // #endregion methods
                // #endregion optional
            />
        </Background>
    );
});
// #endregion module
