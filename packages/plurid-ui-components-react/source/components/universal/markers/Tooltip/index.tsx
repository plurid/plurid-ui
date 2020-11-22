// #region imports
    // #region libraries
    import React, {
        useRef,
        useState,
        useEffect,
    } from 'react';

    import {
        plurid as pluridTheme,
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region internal
    import {
        StyledTooltip,
        StyledTooltipString,
        StyledTooltipIcon,
        StyledTooltipText,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface TooltipProperties {
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
    // #region properties
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

    const theme = themeProperty || pluridTheme;
    const indicator = indicatorProperty ?? true;
    const icon = iconProperty ?? true;
    // #endregion properties


    // #region references
    const hoverOutTimeout = useRef<null | number>(null);
    // #endregion references


    // #region state
    const [mouseOver, setMouseOver] = useState(false);
    const [showTooltipText, setShowTooltipText] = useState(false);
    // #endregion state


    // #region effects
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
    // #endregion effects


    // #region render
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
                ...style,
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
    // #endregion render
}
// #endregion module



// #region exports
export default Tooltip;
// #endregion exports
