import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    sitting,
} from '@plurid/plurid-ui-state-react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconSpeak,
    PluridIconStateShareImage,
} from '@plurid/plurid-icons-react';

import ToolbarSpecific from '../ToolbarSpecific';
import VerticalToolbarButton from '../VerticalToolbarButton';
import SittingTray from '#components/pluridal/sitting/SittingTray';

import {
    ToolbarButton,
} from '#data/interfaces';

import {
    HorizontalPositions,
} from '#data/enumerations';



export interface ToolbarGeneralOwnProperties {
    buttons: ToolbarButton[],
    handleClick: (type: any) => void;
    speakButton?: boolean;
    selectors: any;
    context: any;
}

export interface ToolbarGeneralStateProperties {
    stateView: string;
    stateToolbars: any;
    stateSittingTray: boolean;
    stateInteractionTheme: Theme;
}

export interface ToolbarGeneralDispatchProperties {
    dispatchToggleSittingTray: typeof sitting.actions.toggleSittingTray;
}

export type ToolbarGeneralProperties = ToolbarGeneralOwnProperties
    & ToolbarGeneralStateProperties
    & ToolbarGeneralDispatchProperties;

const ToolbarGeneral: React.FC<ToolbarGeneralProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        buttons,
        handleClick,
        speakButton,
        selectors,
        context,

        /** state */
        stateView,
        stateSittingTray,
        stateToolbars,
        stateInteractionTheme,

        /** dispatch */
        dispatchToggleSittingTray,
    } = properties;

    const {
        scaleIcons,
        showNames,
    } = stateToolbars;

    const iconTextLeft = false;


    /** render */
    return (
        <ToolbarSpecific
            buttons={buttons}
            handleClick={handleClick}
            activeType={stateView}
            position={HorizontalPositions.left}
            selectors={selectors}
            context={context}
        >
            {speakButton && (
                <VerticalToolbarButton
                    atClick={() => {}}
                    icon={PluridIconSpeak}
                    active={false}
                    text="speak"
                    textLeft={iconTextLeft}
                    showText={showNames}
                    scaleIcon={scaleIcons}
                    theme={stateInteractionTheme}
                />
            )}

            <VerticalToolbarButton
                atClick={() => dispatchToggleSittingTray()}
                icon={PluridIconStateShareImage}
                active={stateSittingTray}
                text="sitting"
                textLeft={iconTextLeft}
                showText={showNames}
                scaleIcon={scaleIcons}
                theme={stateInteractionTheme}
                last={true}
            />

            {stateSittingTray && (
                <SittingTray
                    selectors={selectors}
                    context={context}
                />
            )}
        </ToolbarSpecific>
    );
}


const mapStateToProps = (
    state: any,
    ownProperties: any,
): ToolbarGeneralStateProperties => ({
    stateView: ownProperties.selectors.views.getGeneralView(state),
    stateToolbars: ownProperties.selectors.product.getProductUI(state).toolbars,
    stateSittingTray: ownProperties.selectors.sitting.getSittingTray(state),
    stateInteractionTheme: ownProperties.selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ToolbarGeneralDispatchProperties => ({
    dispatchToggleSittingTray: () => dispatch(
        sitting.actions.toggleSittingTray(),
    ),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToolbarGeneral);
