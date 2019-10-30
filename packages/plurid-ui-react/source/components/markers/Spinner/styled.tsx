import styled from 'styled-components';



export const StyledSpinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

export const StyledLoader: any = styled.div`
    position: relative;
    border-radius: 50%;

    width: ${(props: any) => {
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
    height: ${(props: any) => {
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
    /* width: 35px;
    height: 35px; */

    border-top: 0.2em solid rgba(255, 255, 255, 0.1);
    border-right: 0.2em solid rgba(255, 255, 255, 0.1);
    border-bottom: 0.2em solid rgba(255, 255, 255, 0.1);
    border-left: 0.2em solid ${(props: any) => {
        return props.theme.colorPrimary;
    }};

    animation: rotate 1.2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
