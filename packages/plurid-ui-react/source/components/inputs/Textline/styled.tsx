import styled from 'styled-components';



export const StyledTextline: any = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;

    input {
        box-sizing: border-box;
        border: none;
        outline: none;
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
        min-height: 36px;

        background-color: ${(props: any) => {
            if (props.devisible) {
                return 'transparent';
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
        color: ${(props: any) => {
            return props.theme.colorPrimary;
        }};
        box-shadow: inset 0px 4px 4px ${(props: any) => {
            if (props.devisible) {
                return 'transparent';
            }

            return props.theme.boxShadowUmbraColor;
        }};
        border-radius: ${(props: any) => {
            if (props.round) {
                return '1000px';
            }
            return '0px';
        }};
        width: ${(props: any) => {
            if (!props.width) {
                return '100%';
            }

            if (typeof props.width === 'number') {
                return props.width + 'px';
            }

            return props.width;
        }};

        ::placeholder {
            color: ${(props: any) => {
                return props.theme.colorSecondary;
            }};
        }
    }
`;
