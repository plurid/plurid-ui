import React from 'react';
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
    step?: number;
    name: string;
    showValue?: boolean;
    width?: number;
    handleInput: any;
    atChange: () => void;
}

const Slider: React.FC<SliderProperties> = (properties) => {
    const {
        theme,
        level,
        atChange,

        min,
        max,
        value,
        defaultValue,
        step,

        showValue,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _step = step === undefined
        ? 1
        : step;

    return (
        <StyledSlider
            theme={_theme}
        >
            <StyledSliderInputContainer
                theme={_theme}
                // hovered={hovered}
            >
                <input
                    type="range"
                    min={min}
                    max={max}
                    name={name}
                    value={value}
                    step={_step}
                    // onMouseEnter={this.toggleHover}
                    // onMouseLeave={this.toggleHover}
                    // onChange={this.handleSliderInput}
                    // onDoubleClick={this.handleDoubleClick}
                />
            </StyledSliderInputContainer>

            {showValue && (
                <StyledSliderValue
                    theme={_theme}
                >
                    {parseInt(value + '')}
                </StyledSliderValue>
            )}
        </StyledSlider>
    );
}


export default Slider;
