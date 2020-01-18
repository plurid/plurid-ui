import React from 'react';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
} from '@storybook/addon-knobs';

import PluridFormLeftRight from '../';



storiesOf(
    'PluridFormLeftRight',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    return (
        <>
            <PluridFormLeftRight>
                <div>
                    aaaa
                </div>

                <div>
                    bbbb
                </div>
            </PluridFormLeftRight>
        </>
    );
});
