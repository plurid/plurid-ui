// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const toggleGlobalShortcuts = (
    state: Types.State,
    action: Types.ToggleGlobalShortcutsAction,
) => {
    const global = action.payload
        ? action.payload
        : !state.global;

    return {
        ...state,
        global,
    };
}


const resolvers = {
    toggleGlobalShortcuts,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
