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
    min: number;
    max: number;
    value: number;
    defaultValue: number;
    name: string;
    handleInput: (value: number) => void;
    showValue?: boolean;
    step?: number;
    width?: number;
}

const Slider: React.FC<SliderProperties> = (properties) => {
    const {
        theme,
        level,
        min,
        max,
        value,
        defaultValue,
        step,
        handleInput,
        showValue,
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
        handleInput(defaultValue);
    }

    const handleSliderInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInput(parseFloat(event.target.value));
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
