import React from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledSittingTray,
    StyledSittingTrayContainer,
} from './styled';

import StateLink from './components/StateLink';
import StateLine from './components/StateLine';
import StateImage from './components/StateImage';
import Sittings from './components/Sittings';



interface SittingTrayOwnProperties {
    selectors: any;
    context: any;
}

interface SittingTrayStateProperties {
    stateInteractionTheme: Theme;
}

interface SittingTrayDispatchProperties {
}

type SittingTrayProperties = SittingTrayOwnProperties
    & SittingTrayStateProperties
    & SittingTrayDispatchProperties;

const SittingTray: React.FC<SittingTrayProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        selectors,
        context,

        /** state */
        stateInteractionTheme,
    } = properties;


    /** render */
    return (
        <StyledSittingTray
            theme={stateInteractionTheme}
        >
            <StyledSittingTrayContainer>
                <ul>
                    <li>
                        <StateLink
                            selectors={selectors}
                            context={context}
                        />
                    </li>

                    <li>
                        <StateLine
                            selectors={selectors}
                            context={context}
                        />
                    </li>

                    <li>
                        <StateImage
                            selectors={selectors}
                            context={context}
                        />
                    </li>

                    <li>
                        <Sittings
                            selectors={selectors}
                            context={context}
                        />
                    </li>
                </ul>
            </StyledSittingTrayContainer>
        </StyledSittingTray>
    );
}


const mapStateToProps = (
    state: any,
    ownProperties: any,
): SittingTrayStateProperties => ({
    stateInteractionTheme: ownProperties.selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SittingTrayDispatchProperties => ({
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SittingTray);
