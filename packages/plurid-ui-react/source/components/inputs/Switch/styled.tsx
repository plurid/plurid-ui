import styled from 'styled-components';



export const StyledSwitch: any = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`;


export const StyledSwitchSlider: any = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s ease-in-out;
    box-shadow: inset 0 2px 3px black;

    background-color: ${(props: any) => {
        if (props.exclusive && !props.checked) {
            switch (props.level) {
                case 0:
                    return props.theme.backgroundColorPrimaryAlpha;
                case 1:
                    return props.theme.backgroundColorSecondaryAlpha;
                case 2:
                    return props.theme.backgroundColorTertiaryAlpha;
                case 3:
                    return props.theme.backgroundColorQuaternaryAlpha;
                default:
                    return props.theme.backgroundColorPrimaryAlpha;
            }
        }
        switch (props.level) {
            case 0:
                return props.theme.backgroundColorPrimary;
            case 1:
                return props.theme.backgroundColorSecondary;
            case 2:
                return props.theme.backgroundColorTertiary;
            case 3:
                return props.theme.backgroundColorQuaternary;
            default:
                return props.theme.backgroundColorPrimary;
        }
    }};
    border-radius: ${(props: any) => {
        if (props.round) {
            return '34px';
        }
        return '0';
    }};

    :before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        transition: .4s;

        background-color: ${(props: any) => {
            return props.theme.colorPrimary;
        }};
        border-radius: ${(props: any) => {
            if (props.round) {
                return '50%';
            }
            return '0';
        }};
        transform: ${(props: any) => {
            if (props.checked) {
                return 'translateX(26px)';
            }
            return 'translateX(0px)';
        }};
    }
`;
