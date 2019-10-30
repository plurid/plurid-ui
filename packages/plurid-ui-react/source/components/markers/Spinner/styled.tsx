import styled from 'styled-components';



export const StyledSpinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

export const StyledLoader: any = styled.div`
    width: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '1rem';
            case 'normal':
                return '1.8rem';
            case 'large':
                return '2.4rem';
            default:
                return '1.8rem';
        }
    }};
    height: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '1rem';
            case 'normal':
                return '1.8rem';
            case 'large':
                return '2.4rem';
            default:
                return '1.8rem';
        }
    }};

    position: relative;
    border-radius: 50%;

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
