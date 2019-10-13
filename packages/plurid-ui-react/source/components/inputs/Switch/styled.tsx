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
    transition: .4s;

    background-color: ${(props: any) => {
        return props.theme.backgroundColorSecondary;
    }};
    box-shadow: inset 0 2px 3px black;

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
