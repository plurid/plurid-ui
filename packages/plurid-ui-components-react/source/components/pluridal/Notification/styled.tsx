import styled, {
    keyframes,
} from 'styled-components';



const translateUp = keyframes`
    from {
        transform: translateY(2000px);
    }
    to {
        transform: translateY(0);
    }
`;


export const StyledNotification = styled.div`
    display: grid;
    align-items: center;
    position: relative;
    min-height: 60px;
    width: 260px;
    margin: 10px 20px;
    border-radius: 10px;
    pointer-events: all;
    background-color: ${(props: any) => {
        return props.theme.backgroundColorSecondary;
    }};
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};
    box-shadow: ${(props: any) => {
        return props.theme.boxShadowUmbra;
    }};
    animation: ${translateUp} 750ms ease-in-out forwards;

    a {
        text-decoration: none;
        color: ${(props: any) => {
            return props.theme.colorSecondary;
        }};
    }
`;


export const StyledNotificationContent = styled.div`
    font-size: 0.9rem;
    padding: 32px 16px;
`;


export const StyledNotificationClose = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    user-select: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: grid;
    place-content: center;
`;
