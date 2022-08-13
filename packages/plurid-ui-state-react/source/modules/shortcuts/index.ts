// #region imports
    // #region libraries
    import {
        createSlice,
        PayloadAction,
    } from '@reduxjs/toolkit';
    // #endregion libraries


    // #region external
    import {
        StateWithSlice,
    } from '~data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export interface ShortcutsState {
    global: boolean;
}


const initialState: ShortcutsState = {
    global: true,
};

const name = 'shortcuts' as const;


export const factory = (
    state: ShortcutsState = initialState,
) => createSlice({
    name,
    initialState: state,
    reducers: {
        toggleGlobalShortcuts: (
            state,
            action: PayloadAction<boolean> | PayloadAction<void>,
        ) => {
            state.global = typeof action.payload === 'boolean'
                ? action.payload
                : !state.global;
        },
    },
});

export const slice = factory();
// #endregion module



// #region exports
export const actions = slice.actions;


const getGlobal = (
    state: StateWithSlice<typeof name, ShortcutsState>,
) => state.shortcuts.global;

export const selectors = {
    getGlobal,
};


export const reducer = slice.reducer;
// #endregion exports
