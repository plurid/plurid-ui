import React, {
    useState,
} from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledSlider,
    StyledSliderInputContainer,
    StyledSliderValue,
} from './styled';



interface SliderProperties {
    theme?: Theme;
    level?: number;
    name?: string;
    step?: number;
    showValue?: boolean;

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
        showValue,

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
        >
            <StyledSliderInputContainer
                theme={_theme}
                hovered={mouseOver}
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

            {showValue && (
                <StyledSliderValue
                    theme={_theme}
                >
                    {parseFloat(value + '')}
                </StyledSliderValue>
            )}
        </StyledSlider>
    );
}


export default Slider;
