import React from 'react';

import {
    plurid as pluridTheme,
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledToolbarControls,
    StyledToolbarControlsButtons,
} from './styled';

import {
    VerticalPositions,
} from '#data/enumerations';



interface ToolbarControlsOwnProperties {
    position?: keyof typeof VerticalPositions;

    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

type ToolbarControlsProperties = ToolbarControlsOwnProperties;

const ToolbarControls: React.FC<ToolbarControlsProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        /** required */

        /** optional */
        position: positionProperty,
        theme: themeProperty,
        style,
        className,

        children,
    } = properties;

    const position = positionProperty || VerticalPositions.top;
    const theme = themeProperty || pluridTheme;


    /** render */
    return (
        <StyledToolbarControls
            position={position}
            theme={theme}
            style={{
                ...style,
            }}
            className={className}
        >
            <StyledToolbarControlsButtons
                theme={theme}
            >
                {children}
            </StyledToolbarControlsButtons>
        </StyledToolbarControls>
    );
}


export default ToolbarControls;
