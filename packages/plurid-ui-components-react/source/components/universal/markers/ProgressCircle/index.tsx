// #region imports
    // #region libraries
    import React from 'react';

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
    // #region required
        // #region values
        progress: number;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        size?: Sizes;
        radius?: number;
        stroke?: number;
        theme?: Theme;
        style?: React.CSSProperties;
        className?: string;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion optional
}

const ProgressCircle: React.FC<ProgressCircleProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            progress,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            size,
            radius,
            stroke,
            theme,
            style,
            className,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;

    const progressValue = progress < 0
        ? 0
        : progress > 100
            ? 100
            : progress;

    const radiusValue = radius || 20;
    const strokeValue = stroke || 3;

    const normalizedRadius = radiusValue - strokeValue * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progressValue / 100 * circumference;

    const themeValue = theme || pluridTheme;
    const sizeValue = size || 'normal';
    // #endregion properties


    // #region render
    return (
        <StyledProgressCircle
            size={sizeValue}
            theme={themeValue}
            style={{
                ...style,
            }}
            className={className}
        >
            <svg
                height={radiusValue * 2}
                width={radiusValue * 2}
            >
                 <circle
                    stroke={themeValue.backgroundColorPrimaryAlpha}
                    fill="transparent"
                    strokeWidth={strokeValue}
                    r={normalizedRadius}
                    cx={radiusValue}
                    cy={radiusValue}
                />
                <circle
                    stroke={themeValue.colorPrimary}
                    fill="transparent"
                    strokeWidth={strokeValue}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{strokeDashoffset}}
                    r={normalizedRadius}
                    cx={radiusValue}
                    cy={radiusValue}
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
