// #region imports
    // #region libraries
    import React, {
        useState,
        useEffect,
    } from 'react';

    import {
        plurid as pluridTheme,
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        Sizes,
    } from '#data/interfaces';
    // #endregion external


    // #region internal
    import {
        StyledProgressCircle,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ProgressCircleProperties {
    progress: number;

    size?: Sizes;
    radius?: number;
    stroke?: number;
    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

const ProgressCircle: React.FC<ProgressCircleProperties> = (
    properties,
) => {
    // #region properties
    const {
        progress,

        size: sizeProperty,
        radius,
        stroke,
        theme: themeProperty,
        style,
        className,
    } = properties;

    const progressValue = progress < 0
        ? 0
        : progress > 100
            ? 100
            : progress;

    const _radius = radius || 20;
    const _stroke = stroke || 3;

    const normalizedRadius = _radius - _stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progressValue / 100 * circumference;
    // #endregion properties


    // #region state
    const [theme, setTheme] = useState(
        themeProperty || pluridTheme,
    );

    const [size, setSize] = useState(
        sizeProperty || 'normal',
    );
    // #endregion state


    // #region effects
    /** Handle Theme */
    useEffect(() => {
        if (themeProperty) {
            setTheme(themeProperty);
        }
    }, [
        themeProperty,
    ]);

    /** Handle Size */
    useEffect(() => {
        if (sizeProperty) {
            setSize(sizeProperty);
        }
    }, [
        sizeProperty,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledProgressCircle
            size={size}
            theme={theme}
            style={{
                ...style,
            }}
            className={className}
        >
            <svg
                height={_radius * 2}
                width={_radius * 2}
            >
                 <circle
                    stroke={theme.backgroundColorPrimaryAlpha}
                    fill="transparent"
                    strokeWidth={_stroke}
                    r={normalizedRadius}
                    cx={_radius}
                    cy={_radius}
                />
                <circle
                    stroke={theme.colorPrimary}
                    fill="transparent"
                    strokeWidth={_stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{strokeDashoffset}}
                    r={normalizedRadius}
                    cx={_radius}
                    cy={_radius}
                />
            </svg>
        </StyledProgressCircle>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default ProgressCircle;
// #endregion exports
