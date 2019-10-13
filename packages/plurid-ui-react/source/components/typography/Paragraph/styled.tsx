import styled from 'styled-components';



export const StyledParagraph: any = styled.p`
    color: ${props => props.theme.colorPrimary};
    font-family: 'Ubuntu';
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
