// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import {
        PluridIconAdd,
        PluridIconCommand,
    } from '@plurid/plurid-icons-react';

    import { storiesOf } from '@storybook/react';
    // import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        // boolean,
        // number,
        select,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import ToolbarControls from '../';

    import HorizontalToolbarButton from '../../HorizontalToolbarButton';

    import {
        themeLabel,
        themeOptions,
        defaultThemeValue,
    } from '~utilities/storybook';
    // #endregion external
// #endregion imports



// #region module
// const actions = {
// };

storiesOf(
    'ToolbarControls',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const position = select('Position', ['top', 'bottom'], 'top');

    return (
        <>
            <ToolbarControls
                theme={themes[theme]}
                position={position}
            >
                <HorizontalToolbarButton
                    atClick={() => {}}
                    text=""
                    icon={PluridIconAdd}
                    scaleIcon={true}
                    // active={true}
                />
                <HorizontalToolbarButton
                    atClick={() => {}}
                    text="foo"
                    icon={PluridIconAdd}
                    scaleIcon={true}
                    // active={true}
                />
                <HorizontalToolbarButton
                    atClick={() => {}}
                    icon={PluridIconCommand}
                    text="boo"
                    // scaleIcon={true}
                    // active={true}
                />
            </ToolbarControls>
        </>
    );
});
// #endregion module
