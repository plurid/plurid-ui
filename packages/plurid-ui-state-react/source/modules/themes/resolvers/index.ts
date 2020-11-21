// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const setTheme = (
    state: Types.State,
    action: Types.SetThemeAction,
): Types.State => {
    const {
        type,
        theme,
    } = action.payload;

    const newState = {
        ...state,
    };

    newState[type] = {
        ...theme,
    };

    return newState;
}



const resolvers = {
    setTheme,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
