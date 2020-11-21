// #region imports
    // #region libraries
    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries
// #endregion imports



// #region module
export const SET_THEME = 'SET_THEME';
export interface SetThemePayload {
    type: 'general' | 'interaction';
    theme: Theme;
}
export interface SetThemeAction {
    type: typeof SET_THEME;
    payload: SetThemePayload;
}



export interface State {
    general: Theme,
    interaction: Theme,
}


export type Actions =
    | SetThemeAction;
// #endregion module
