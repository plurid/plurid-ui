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



const DEFAULT_LEVEL = 0;
const DEFAULT_THUMB_SIZE = 'large';
const DEFAULT_STEP = 1;
const DEFAULT_VALUE = 0;
const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;

interface SliderProperties {
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    name?: string;
    theme?: Theme;
    level?: number;
    thumbSize?: 'small' | 'normal' | 'large';
    width?: number | string;
    valueSign?: string;
    namedValueAbove?: boolean;

    value: number;
    atChange: (value: number) => void;
}

const Slider: React.FC<SliderProperties> = (properties) => {
    const {
        defaultValue,
        min,
        max,
        step,
        name,
        theme,
        level,
        thumbSize,
        width,
        valueSign,
        namedValueAbove,

        value,
        atChange,
    } = properties;

    const [mouseOver, setMouseOver] = useState(false);

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? DEFAULT_LEVEL
        : level;

    const _thumbSize = thumbSize === undefined
        ? DEFAULT_THUMB_SIZE
        : thumbSize;

    const _step = step === undefined
        ? DEFAULT_STEP
        : step;

    const handleDoubleClick = () => {
        atChange(defaultValue || DEFAULT_VALUE);
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
                    min={min || DEFAULT_MIN}
                    max={max || DEFAULT_MAX}
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
