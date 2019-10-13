import React from 'react';
import themes from '@plurid/plurid-themes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import PureButton from '../PureButton';


const actions = {
    atClick: action('atClick'),
};


storiesOf(
    'Buttons',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    return (
        <div
            style={{
                // display: 'grid',
                // gridTemplateColumns: '1fr',
                // gridGap: '1rem',
                // width: '200px',
            }}
        >
            <PureButton
                theme={themes.plurid}
                text="Pure Button"
                size="large"
                {...actions}
            />
            <PureButton
                theme={themes.plurid}
                text="Pure Button"
                size="normal"
                {...actions}
            />
            <PureButton
                theme={themes.plurid}
                text="Pure Button"
                size="small"
                {...actions}
            />
        </div>
    );
});
