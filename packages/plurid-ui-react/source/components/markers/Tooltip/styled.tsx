import styled from 'styled-components';

import {
    fontFamilySansSerif,
} from '../../../data/constants'

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledTooltip {
    theme: Theme;
}

export const StyledTooltip = styled.span<IStyledTooltip>`
    position: relative;
    display: inline-grid;
    margin: 0 5px;
    place-content: center;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    font-size: 12px;
    line-height: 1.4;
    text-align: left;

    font-family: ${fontFamilySansSerif};
    color: ${(props: IStyledTooltip) => {
        return props.theme.colorPrimary;
    }};
    background-color: ${(props: IStyledTooltip) => {
        return props.theme.backgroundColorSecondary;
    }};
`;


export const StyledTooltipIcon = styled.span`
    user-select: none;
    cursor: pointer;
`;


interface IStyledTooltipText {
    theme: Theme;
    indicator: boolean;
}

export const StyledTooltipText = styled.div<IStyledTooltipText>`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    z-index: 999;
    padding: 20px;
    min-width: 150px;
    font-size: 12px;
    line-height: 1.3;
    text-align: left;

    color: ${(props: IStyledTooltip) => {
        return props.theme.colorPrimary;
    }};
    background-color: ${(props: IStyledTooltip) => {
        return props.theme.backgroundColorSecondary;
    }};
    box-shadow: ${(props: IStyledTooltip) => {
        return props.theme.boxShadowUmbra;
    }};

    :before {
        content: '';
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-left: ${(props: IStyledTooltipText) => {
            if (props.indicator) {
                return '10px';
            }
            return '0';
        }} solid transparent;
        border-right: ${(props: IStyledTooltipText) => {
            if (props.indicator) {
                return '10px';
            }
            return '0';
        }} solid transparent;
        border-bottom: ${(props: IStyledTooltipText) => {
            if (props.indicator) {
                return '10px';
            }
            return '0';
        }} solid ${(props: IStyledTooltip) => {
            return props.theme.backgroundColorSecondary;
        }};
    }
`;
