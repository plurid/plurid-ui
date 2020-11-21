// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const setTheme = (
    payload: Types.SetThemePayload,
): Types.SetThemeAction => {
    return {
        type: Types.SET_THEME,
        payload,
    };
}



const actions = {
    setTheme,
};
// #endregion module



// #region exports
export default actions;
// #endregion exports
