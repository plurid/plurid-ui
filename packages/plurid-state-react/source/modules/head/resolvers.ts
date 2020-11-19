import * as Types from './types';



export const setHead = (
    state: Types.State,
    action: Types.SetHeadAction,
): Types.State => {
    return {
        ...state,
        ...action.payload,
    };
}



export const resolvers = {
    setHead,
};
