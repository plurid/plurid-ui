// #region imports
    // #region libraries
    import React from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region internal
    import StateLink from './components/StateLink';
    import StateLine from './components/StateLine';
    import StateImage from './components/StateImage';
    import Sittings from './components/Sittings';

    import {
        StyledSittingTray,
        StyledSittingTrayContainer,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface SittingTrayOwnProperties {
    selectors: any;
    context: any;
}

export interface SittingTrayStateProperties {
    stateInteractionTheme: Theme;
}

export interface SittingTrayDispatchProperties {
}

export type SittingTrayProperties = SittingTrayOwnProperties
    & SittingTrayStateProperties
    & SittingTrayDispatchProperties;

const SittingTray: React.FC<SittingTrayProperties> = (
    properties,
) => {
    // #region properties
    const {
        /** own */
        selectors,
        context,

        // #region state
        stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
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
    // #endregion render
}


const mapStatedToProperties = (
    state: any,
    ownProperties: any,
): SittingTrayStateProperties => ({
    stateInteractionTheme: ownProperties.selectors.themes.getInteractionTheme(state),
});


const mapDispatchdToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SittingTrayDispatchProperties => ({
});


const ConnectedSittingTray = connect(
    mapStatedToProperties,
    mapDispatchdToProperties,
)(SittingTray);
// #endregion module



// #region exports
export default ConnectedSittingTray;
// #endregion exports
