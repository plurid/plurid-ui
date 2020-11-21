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
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import InputBox from '..';

    import {
        themeSelect,
        Background,
    } from '../../../../../utilities/storybook';
    // #endregion external
// #endregion imports


// #region module
const actions = {
    // atChange: action('atChange'),
};

storiesOf(
    'PluridInputBox',
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

    return (
        <Background>
            <InputBox
                name={name}
                text={textValue}
                theme={themes[theme]}

                atChange={(event: any) => setTextValue(event.target.value)}

                {...actions}
            />
        </Background>
    );
});
// #endregion module
