import * as Types from './types';



export const toggleGlobalShortcuts = (
    payload?: boolean,
): Types.ToggleGlobalShortcutsAction => {
    return {
        type: Types.TOGGLE_GLOBAL_SHORTCUTS,
        payload,
    };
}



export const actions = {
    toggleGlobalShortcuts,
};
