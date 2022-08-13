import React from 'react';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
} from '@storybook/addon-knobs';

import PluridUIFormLeftRight from '../';



storiesOf(
    'forms',
    module,
)
.addDecorator(withKnobs)
.add('PluridUIFormLeftRight', () => {
    return (
        <>
            <PluridUIFormLeftRight>
                <div>
                    aaaa
                </div>

                <div>
                    bbbb
                </div>
            </PluridUIFormLeftRight>
        </>
    );
});
