// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const setSittingCurrentLink = (
    state: Types.State,
    action: Types.SetSittingCurrentLinkAction,
): Types.State => {
    const currentLink = action.payload;

    return {
        ...state,
        currentLink,
    };
}


const toggleSittingTray = (
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



const resolvers = {
    setSittingCurrentLink,
    toggleSittingTray,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
