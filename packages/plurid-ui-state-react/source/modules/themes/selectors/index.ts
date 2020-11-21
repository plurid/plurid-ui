// #region imports
    // #region external
    import {
        StateOfAny,
    } from '#data/interfaces';

    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const getGeneralTheme = (
    state: StateOfAny & Record<'themes', Types.State>,
) => state.themes.general;
const getInteractionTheme = (
    state: StateOfAny & Record<'themes', Types.State>,
) => state.themes.interaction;



const selectors = {
    getGeneralTheme,
    getInteractionTheme,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
