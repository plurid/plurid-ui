import React, {
    useState,
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledToolbar,
    StyledToolbarButtons,
} from './styled';

import VerticalToolbarButton from '../VerticalToolbarButton';

import {
    ToolbarButton,
} from '#data/interfaces';

import {
    HorizontalPositions,
} from '#data/enumerations';



export interface ToolbarSpecificOwnProperties {
    buttons: ToolbarButton[],
    handleClick: (
        type: any,
        index: number,
    ) => void;
    activeType: any;
    selectors: any;
    position?: keyof typeof HorizontalPositions;
}

export interface ToolbarSpecificStateProperties {
    stateToolbars: any;
    stateIdentonym: string;
    stateInteractionTheme: Theme;
}

export interface ToolbarSpecificDispatchProperties {
}

export type ToolbarSpecificProperties = ToolbarSpecificOwnProperties
    & ToolbarSpecificStateProperties
    & ToolbarSpecificDispatchProperties;

const ToolbarSpecific: React.FC<ToolbarSpecificProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        buttons,
        handleClick,
        activeType,
        position,

        children,

        /** state */
        stateToolbars,
        stateIdentonym,
        stateInteractionTheme,

        /** dispatch */
    } = properties;

    const {
        alwaysShow,
        location,
        scaleIcons,
        showNames,
    } = stateToolbars;

    const toolbarPosition = position
        ? position
        : HorizontalPositions.right;


    /** state */
    const [showToolbar, setShowToolbar] = useState(alwaysShow);
    const [mouseIn, setMouseIn] = useState(false);


    /** handlers */
    const handleMouseMove = (
        event: any,
    ) => {
        if (!showToolbar) {
            setShowToolbar(true);
        }

        // TODO
        // move toolbar
        // if (event.shiftKey) {
        // }
    }


    /** effects */
    useEffect(() => {
        if (alwaysShow) {
            setShowToolbar(true);
        }

        if (mouseIn) {
            setShowToolbar(true);
        } else {
            if (!alwaysShow) {
                setShowToolbar(false);
            }
        }
    }, [
        mouseIn,
        alwaysShow,
    ]);


    /** render */
    return (
        <StyledToolbar
            onMouseMove={() => handleMouseMove}
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
            position={toolbarPosition}
        >
            <StyledToolbarButtons
                theme={stateInteractionTheme}
                style = {{
                    top: location ? location + '%' : '',
                    opacity: showToolbar ? 1 : 0
                }}
            >
                {buttons.filter(button => {
                    const {
                        loggedIn,
                    } = button;

                    if (loggedIn === 'ONLY' && !stateIdentonym) {
                        return false;
                    }

                    if (loggedIn === 'NONE' && stateIdentonym) {
                        return false;
                    }

                    return true;
                }).map((
                    button: ToolbarButton,
                    index,
                ) => {
                    const {
                        type,
                        text,
                        icon: Icon,
                        first,
                        last,
                    } = button;

                    return (
                        <VerticalToolbarButton
                            key={type}
                            atClick={() => handleClick(type, index)}
                            icon={Icon}
                            active={activeType === type}
                            text={text}
                            textLeft={toolbarPosition === 'right'}
                            showText={showNames}
                            scaleIcon={scaleIcons}
                            theme={stateInteractionTheme}
                            first={first}
                            last={last}
                        />
                    );
                })}

                {children}
            </StyledToolbarButtons>
        </StyledToolbar>
    );
}


const mapStateToProperties = (
    state: any,
    ownProperties: any,
): ToolbarSpecificStateProperties => ({
    stateToolbars: ownProperties.selectors.product.getProductUI(state).toolbars,
    stateIdentonym: ownProperties.selectors.owner.getIdentonym(state),
    stateInteractionTheme: ownProperties.selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ToolbarSpecificDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(ToolbarSpecific);
