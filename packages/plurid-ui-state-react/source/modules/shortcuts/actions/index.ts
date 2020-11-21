// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const toggleGlobalShortcuts = (
    payload?: boolean,
): Types.ToggleGlobalShortcutsAction => {
    return {
        type: Types.TOGGLE_GLOBAL_SHORTCUTS,
        payload,
    };
}



const actions = {
    toggleGlobalShortcuts,
};
// #endregion module



// #region exports
export default actions;
// #endregion exports
