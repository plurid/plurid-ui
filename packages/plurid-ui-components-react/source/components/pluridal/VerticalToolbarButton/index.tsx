import React, {
    useState,
} from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledVerticalToolbarButton,
    StyledVerticalToolbarButtonText,
} from './styled';



interface VerticalToolbarButtonOwnProperties {
    atClick: (event: React.MouseEvent) => void;
    icon: React.FC;
    active: boolean;
    text: string;
    textLeft: boolean;
    showText: boolean;
    scaleIcon: boolean;
    theme: Theme;
    first?: boolean;
    last?: boolean;
}

const VerticalToolbarButton: React.FC<VerticalToolbarButtonOwnProperties> = (
    properties,
) => {
    /** properties */
    const {
        atClick,
        icon: Icon,
        active,
        text,
        textLeft,
        showText,
        scaleIcon,
        first,
        last,
        theme,
    } = properties;


    /** state */
    const [mouseOver, setMouseOver] = useState(false);


    /** render */
    return (
        <StyledVerticalToolbarButton
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onClick={atClick}
            active={active}
            scaleIcon={scaleIcon}
            first={first}
            last={last}
            theme={theme}
        >
            <Icon />

            {mouseOver
            && showText
            && (
                <StyledVerticalToolbarButtonText
                    textLeft={textLeft}
                >
                    {text}
                </StyledVerticalToolbarButtonText>
            )}
        </StyledVerticalToolbarButton>
    );
}


export default VerticalToolbarButton;
