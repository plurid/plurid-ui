import React from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconSittings,
} from '@plurid/plurid-icons-react';

import {
    StyledSittings,
} from './styled';

import {
    StyledSittingTrayButton,
    StyledSittingTrayButtonIcon,
    StyledSittingTrayButtonText,
} from '../../styled';



interface SittingsOwnProperties {
    selectors: any;
}

interface SittingsStateProperties {
    stateInteractionTheme: Theme;
}

interface SittingsDispatchProperties {
}

type SittingsProperties = SittingsOwnProperties
    & SittingsStateProperties
    & SittingsDispatchProperties;

const Sittings: React.FC<SittingsProperties> = (
    properties,
) => {
    const {
        /** state */
        stateInteractionTheme,
    } = properties;

    return (
        <StyledSittings
            theme={stateInteractionTheme}
        >
            <StyledSittingTrayButton>
                <StyledSittingTrayButtonIcon>
                    <PluridIconSittings
                        theme={stateInteractionTheme}
                    />
                </StyledSittingTrayButtonIcon>

                <StyledSittingTrayButtonText>
                    sittings
                </StyledSittingTrayButtonText>
            </StyledSittingTrayButton>
        </StyledSittings>
    );
}


const mapStateToProps = (
    state: any,
    ownProperties: any,
): SittingsStateProperties => ({
    stateInteractionTheme: ownProperties.selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SittingsDispatchProperties => ({
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sittings);
