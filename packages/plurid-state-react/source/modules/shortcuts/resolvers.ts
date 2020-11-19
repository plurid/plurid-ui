import * as Types from './types';



export const toggleGlobalShortcuts = (
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


export const resolvers = {
    toggleGlobalShortcuts,
};
