import styled from 'styled-components';

import {
    Sizes,
} from '#data/interfaces';



interface IStyledProgressCircle {
    size: Sizes;
}

export const StyledProgressCircle = styled.div<IStyledProgressCircle>`
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    margin: 10px;
`;
