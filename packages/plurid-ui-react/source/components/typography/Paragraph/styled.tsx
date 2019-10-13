import styled from 'styled-components';



export const StyledParagraph: any = styled.p`
    color: ${props => props.theme.colorPrimary};
    font-family: ${(props: any) => {
        switch (props.fontFamily) {
            case 'sans-serif':
                return "Ubuntu, 'Work Sans', -apple-system, BlinkMacSystemFont, Roboto, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";
            case 'serif':
                return "'Noto Serif', 'Source Serif Pro', Georgia, Times, serif";
            default:
                return props.fontFamily;
        }
    }};
    font-size: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '0.8rem';
            case 'normal':
                return '1rem';
            case 'large':
                return '1.2rem';
            default:
                return '1rem';
        }
    }};
    margin: 1.2rem 0;
    line-height: 1.4;
`;
