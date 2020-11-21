import * as Types from './types';



export const setHead = (
    payload: Types.SetHeadPayload,
): Types.SetHeadAction => {
    return {
        type: Types.SET_HEAD,
        payload,
    };
}



export const actions = {
    setHead,
};
