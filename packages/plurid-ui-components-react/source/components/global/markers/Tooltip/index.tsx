import React, {
    useRef,
    useState,
    useEffect,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledTooltip,
    StyledTooltipString,
    StyledTooltipIcon,
    StyledTooltipText,
} from './styled';



interface TooltipProperties {
    tool: string | React.FC<any>;
    tip: string | React.FC<any>;

    indicator?: boolean;
    /**
     * Render the `tool` as a circle.
     */
    icon?: boolean;

    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

const Tooltip: React.FC<TooltipProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** required */
        tool: Tool,
        tip: Tip,

        /** optional */
        indicator: indicatorProperty,
        icon: iconProperty,

        theme: themeProperty,
        style,
        className,
    } = properties;

    const theme = themeProperty === undefined
        ? themes.plurid
        : themeProperty;

    const indicator = indicatorProperty === undefined
        ? true
        : indicatorProperty;

    const icon = iconProperty === undefined
        ? true
        : iconProperty;


    /** references */
    const hoverOutTimeout = useRef<null | number>(null);


    /** state */
    const [mouseOver, setMouseOver] = useState(false);
    const [showTooltipText, setShowTooltipText] = useState(false);


    /** effects */
    useEffect(() => {
        if (mouseOver) {
            setShowTooltipText(true);
        }

        if (!mouseOver) {
            hoverOutTimeout.current = setTimeout(
                () => {
                    setShowTooltipText(false);
                },
                500,
            );
        }

        return () => {
            if (hoverOutTimeout.current) {
                clearTimeout(hoverOutTimeout.current);
            }
        }
    }, [
        mouseOver,
    ]);


    /** render */
    const renderTool = (
        <>
            {typeof Tool === 'string' ? (
                <>{Tool}</>
            ) : (
                <Tool />
            )}
        </>
    );

    return (
        <StyledTooltip
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => !showTooltipText ? setMouseOver(true) : null}
            theme={theme}
            style={{
                ...style
            }}
            className={className}
        >
            {icon && (
                <StyledTooltipIcon
                    theme={theme}
                >
                    {renderTool}
                </StyledTooltipIcon>
            )}

            {!icon && (
                <StyledTooltipString>
                    {renderTool}
                </StyledTooltipString>
            )}

            {showTooltipText && (
                <StyledTooltipText
                    theme={theme}
                    indicator={indicator}
                >
                    {typeof Tip === 'string'
                    ? (
                        <>{Tip}</>
                    ) : (
                        <Tip />
                    )}
                </StyledTooltipText>
            )}
        </StyledTooltip>
    );
}


export default Tooltip;
