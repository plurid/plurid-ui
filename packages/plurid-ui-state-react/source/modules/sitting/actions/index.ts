// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const setSittingCurrentLink = (
    link: string,
): Types.SetSittingCurrentLinkAction => {
    return {
        type: Types.SET_SITTING_CURRENT_LINK,
        payload: link,
    };
}


const toggleSittingTray = (): Types.ToggleSittingTrayAction => {
    return {
        type: Types.TOGGLE_SITTING_TRAY,
    };
}



const actions = {
    setSittingCurrentLink,
    toggleSittingTray,
};
// #endregion module



// #region exports
export default actions;
// #endregion exports
