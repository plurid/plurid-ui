import styled from 'styled-components';



export const StyledLinkButton = styled.button`
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};

    display: block;
    margin: 0 1rem;
    border: none;
    outline: none;
    user-select: none;
    cursor: pointer;
    display: grid;
    place-content: center;
    font-size: 1rem;
    font-weight: bold;
    background: transparent;
`;
