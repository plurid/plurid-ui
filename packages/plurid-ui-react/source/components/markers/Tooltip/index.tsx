import React, {
    useState,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledTooltip,
    StyledTooltipIcon,
    StyledTooltipText,
} from './styled';

import {
    Sizes,
} from '../../../data/interfaces';



interface TooltipProperties {
    icon: string | React.FC<any>;
    text: string | React.FC<any>;

    size?: Sizes;
    indicator?: boolean;

    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

const Tooltip: React.FC<TooltipProperties> = (
    properties,
) => {
    const {
        /** required */
        icon: Icon,
        text: Text,

        /** optional */
        size,
        indicator: indicatorProperty,

        theme,
        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _size = size === undefined
        ? 'normal'
        : size;

    const indicator = indicatorProperty === undefined
        ? true
        : indicatorProperty;

    const [showTooltipText, setShowTooltipText] = useState(false);

    return (
        <StyledTooltip
            onMouseEnter={() => setShowTooltipText(true)}
            onMouseLeave={() => setShowTooltipText(false)}
            onMouseMove={() => !showTooltipText ? setShowTooltipText(true) : null}
            theme={_theme}
            style={{
                ...style
            }}
            className={className}
        >
            <StyledTooltipIcon>
                {typeof Icon === 'string'
                ? (
                    <>{Icon}</>
                ) : (
                    <Icon />
                )}
            </StyledTooltipIcon>

            {showTooltipText && (
                <StyledTooltipText
                    theme={_theme}
                    indicator={indicator}
                >
                    {typeof Text === 'string'
                    ? (
                        <>{Text}</>
                    ) : (
                        <Text />
                    )}
                </StyledTooltipText>
            )}
        </StyledTooltip>
    );
}


export default Tooltip;
