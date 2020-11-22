import React, {
    useState,
    useEffect,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledProgressCircle,
} from './styled';

import {
    Sizes,
} from '#data/interfaces';



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
    const {
        progress,

        size: sizeProperty,
        radius,
        stroke,
        theme: themeProperty,
        style,
        className,
    } = properties;

    const [theme, setTheme] = useState(
        themeProperty === undefined
            ? themes.plurid
            : themeProperty
    );

    const [size, setSize] = useState(
        sizeProperty === undefined
            ? 'normal'
            : sizeProperty
    );

    const _radius = radius || 20;
    const _stroke = stroke || 3;

    const normalizedRadius = _radius - _stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;


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
}


export default ProgressCircle;
