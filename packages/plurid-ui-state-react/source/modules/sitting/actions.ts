import * as Types from './types';



export const setSittingCurrentLink = (
    link: string,
): Types.SetSittingCurrentLinkAction => {
    return {
        type: Types.SET_SITTING_CURRENT_LINK,
        payload: link,
    };
}


export const toggleSittingTray = (): Types.ToggleSittingTrayAction => {
    return {
        type: Types.TOGGLE_SITTING_TRAY,
    };
}


export const actions = {
    setSittingCurrentLink,
    toggleSittingTray,
};
