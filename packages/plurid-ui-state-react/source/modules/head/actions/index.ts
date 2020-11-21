// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
export const setHead = (
    payload: Types.SetHeadPayload,
): Types.SetHeadAction => {
    return {
        type: Types.SET_HEAD,
        payload,
    };
}


const actions = {
    setHead,
};
// #endregion module



// #region exports
export default actions;
// #endregion exports
