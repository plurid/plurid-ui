import styled from 'styled-components';



export const StyledLinkButton: any = styled.button`
    color: ${(props: any) => {
        switch (props.level) {
            case 0:
                return props.theme.colorPrimary;
            case 1:
                return props.theme.colorSecondary;
            case 2:
                return props.theme.colorTertiary;
            default:
                return props.theme.colorPrimary;
        }
    }};
    margin: ${(props: any) => {
        if (props.inline) {
            return '0';
        }
        return '0 1rem';
    }};
    padding: ${(props: any) => {
        if (props.inline) {
            return '0';
        }
        return 'initial';
    }};
    font-size: ${(props: any) => {
        if (props.inline) {
            return 'inherit';
        }
        return '0.9rem';
    }};
    display: ${(props: any) => {
        if (props.inline) {
            return 'inline';
        }
        return 'grid';
    }};

    border: none;
    outline: none;
    user-select: none;
    cursor: pointer;
    place-content: center;
    font-weight: bold;
    background: transparent;
`;


export const StyledLinkButtonLoading: any = styled.div`
    position: relative;
    min-height: 1rem;
    height: 100%;
    width: 100%;
`;
