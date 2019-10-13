import styled from 'styled-components';



export const StyledPureButton: any = styled.button`
    display: block;
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};
    /* width: 100%; */
    min-width: 150px;
    padding: 0 25px;
    border: none;
    outline: none;
    user-select: none;
    cursor: pointer;
    display: grid;
    place-content: center;
    border-radius: 20px;
    font-size: 15px;
    font-weight: bold;
    height: 40px;
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
    /* background-color: hsl(247, 19%, 29%); */
    box-shadow: 0px 10px 10px 0px ${(props: any) => {
        return props.theme.boxShadowUmbraColor;
    }};
    /* box-shadow: 0px 10px 10px 0px hsla(220, 40%, 5%, 0.5); */
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
        /* background-color: hsl(247, 19%, 39%); */
    }

    :active {
        box-shadow: 0px 3px 3px 0px ${(props: any) => {
            return props.theme.boxShadowUmbraColor;
        }};
        /* box-shadow: 0px 3px 3px 0px hsla(220, 40%, 5%, 0.5); */
    }
`;
