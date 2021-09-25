// #region imports
    // #region libraries
    import React from 'react';

    import themes from '@plurid/plurid-themes';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import {
        withKnobs,
        select,
        boolean,
        number,
    } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import {
        themeLabel,
        themeOptions,
        defaultThemeValue,
    } from '~utilities/storybook';

    import PluridUIDropdown from '../';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    // atSelect: action('atSelect'),
};

storiesOf(
    'inputs',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIDropdown', () => {
    const selectables = [
        'One',
        'Two',
        'Three'
    ];

    const selectablesItems = [
        {
            id: '1_MONTH',
            value: '1 Month',
        },
        {
            id: '1_YEAR',
            value: '1 Year',
        },
        {
            id: '100_YEARS',
            value: '100 Years',
        },
        {
            id: '1000_YEARS',
            value: '1000 Years',
        },
        {
            id: '10000_YEARS',
            value: '10000 Years',
        },
    ];

    const left = boolean('Left', false);

    const theme = select(themeLabel, themeOptions, defaultThemeValue);
    const level = number('Level', 0);
    const filterable = boolean('Filterable', false);
    const width = number('Width', 100);
    const heightItems = number('Height Items', 2);
    // const devisible = boolean('Devisible', false);
    // const round = boolean('Round', true);

    return (
        <div
            style={{
                backgroundColor: 'black',
                height: '200px',
                padding: '2rem',
            }}
        >
            <PluridUIDropdown
                selectables={selectablesItems}
                selected={selectablesItems[1]}
                atSelect={(selected) => {console.log(selected)}}

                left={left}

                theme={themes[theme]}
                level={level}
                // devisible={devisible}
                // round={round}
                filterable={filterable}
                // filterUpdate={() => {}}
                heightItems={heightItems}
                width={width}
                {...actions}
            />
        </div>
    );
});
// #endregion module
