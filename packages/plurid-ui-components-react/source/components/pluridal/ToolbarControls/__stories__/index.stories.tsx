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

import ToolbarControls from '../';

import {
    themeLabel,
    themeOptions,
    defaultThemeValue,
} from '../../../utilities/storybook';

import HorizontalToolbarButton from '../../HorizontalToolbarButton';



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
