import * as Types from './types';



export const setSittingCurrentLink = (
    state: Types.State,
    action: Types.SetSittingCurrentLinkAction,
): Types.State => {
    const currentLink = action.payload;

    return {
        ...state,
        currentLink,
    };
}


export const toggleSittingTray = (
    state: Types.State,
    action: Types.ToggleSittingTrayAction,
): Types.State => {
    if (typeof action.payload === 'boolean') {
        return {
            ...state,
            tray: action.payload,
        };
    }

    return {
        ...state,
        tray: !state.tray,
    };
}



export const resolvers = {
    setSittingCurrentLink,
    toggleSittingTray,
};
