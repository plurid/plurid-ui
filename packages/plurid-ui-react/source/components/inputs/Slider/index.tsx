import React, {
    useState,
} from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledSlider,
    StyledNamedValue,
    StyledSliderInputContainer,
    StyledSliderValue,
} from './styled';



interface SliderProperties {
    theme?: Theme;
    level?: number;
    name?: string;
    step?: number;
    namedValueAbove?: boolean;
    valueRight?: boolean;
    thumbSize?: 'small' | 'normal' | 'large';
    width?: number | string;
    valueSign?: string;

    min: number;
    max: number;
    value: number;
    defaultValue: number;
    atChange: (value: number) => void;
}

const Slider: React.FC<SliderProperties> = (properties) => {
    const {
        theme,
        level,
        name,
        step,
        namedValueAbove,
        thumbSize,
        width,
        valueSign,

        min,
        max,
        value,
        defaultValue,
        atChange,
    } = properties;

    const [mouseOver, setMouseOver] = useState(false);

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _thumbSize = thumbSize === undefined
        ? 'large'
        : thumbSize;

    const _step = step === undefined
        ? 1
        : step;

    const handleDoubleClick = () => {
        atChange(defaultValue);
    }

    const handleSliderInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        atChange(parseFloat(event.target.value));
    }

    return (
        <StyledSlider
            theme={_theme}
            width={width}
        >
            {namedValueAbove && (
                <StyledNamedValue>
                    <div>
                        {name}
                    </div>

                    <StyledSliderValue
                        theme={_theme}
                    >
                        {value}{valueSign}
                    </StyledSliderValue>
                </StyledNamedValue>
            )}

            <StyledSliderInputContainer
                theme={_theme}
                hovered={mouseOver}
                thumbSize={_thumbSize}
                level={_level}
                width={width}
            >
                <input
                    type="range"
                    min={min}
                    max={max}
                    name={name}
                    value={value}
                    step={_step}
                    onMouseEnter={() => setMouseOver(true)}
                    onMouseLeave={() => setMouseOver(false)}
                    onMouseMove={() => mouseOver ? setMouseOver(true) : null}
                    onChange={handleSliderInput}
                    onDoubleClick={handleDoubleClick}
                />
            </StyledSliderInputContainer>
        </StyledSlider>
    );
}


export default Slider;
