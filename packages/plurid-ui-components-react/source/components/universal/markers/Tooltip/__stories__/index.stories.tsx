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
        boolean,
        text,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import {
        themeLabel,
        themeOptions,
        defaultThemeValue,
    } from '#utilities/storybook';

    import PluridUITooltip from '../';
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
    'markers',
    module,
)
.addDecorator(withKnobs)
.add('PluridUITooltip', () => {
    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const indicator = boolean('Indicator', true);
    const icon = boolean('Icon', true);
    const tool = text('Tool', '?');
    const tip = text('Tip', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    return (
        <div
            style={{
            }}
        >
            <p>
                words words&nbsp;

                <PluridUITooltip
                    tool={tool}
                    tip={tip}
                    theme={themes[theme]}
                    indicator={indicator}
                    icon={icon}
                />
            </p>
        </div>
    );
});
// #endregion module
