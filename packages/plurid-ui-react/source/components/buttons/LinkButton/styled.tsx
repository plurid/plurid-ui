import styled from 'styled-components';



export const StyledLinkButton = styled.button`
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};

    display: block;
    width: 100%;
    border: none;
    outline: none;
    user-select: none;
    cursor: pointer;
    display: grid;
    place-content: center;
    font-size: 15px;
    font-weight: bold;
    background: transparent;
`;
