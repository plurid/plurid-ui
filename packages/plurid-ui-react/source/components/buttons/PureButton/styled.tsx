import styled from 'styled-components';



export const StyledPureButton: any = styled.button`
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};
    background-color: ${(props: any) => {
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
    box-shadow: 0px 8px 8px 0px ${(props: any) => {
        return props.theme.boxShadowUmbraColor;
    }};

    display: block;
    min-width: 10rem;
    padding: 0 1.4rem;
    border: none;
    outline: none;
    user-select: none;
    cursor: pointer;
    display: grid;
    place-content: center;
    border-radius: 1.4rem;
    font-size: 1rem;
    line-height: 1.2;
    font-weight: bold;
    height: 2.8rem;
    transition: box-shadow 200ms linear;

    :hover {
        background-color: ${(props: any) => {
            switch (props.level) {
                case 0:
                    return props.theme.backgroundColorSecondary;
                case 1:
                    return props.theme.backgroundColorTertiary;
                case 2:
                    return props.theme.backgroundColorQuaternary;
                case 3:
                    return props.theme.backgroundColorPrimary;
                default:
                    return props.theme.backgroundColorSecondary;
            }
        }};
    }

    :active {
        box-shadow: 0px 3px 3px 0px ${(props: any) => {
            return props.theme.boxShadowUmbraColor;
        }};
    }
`;
