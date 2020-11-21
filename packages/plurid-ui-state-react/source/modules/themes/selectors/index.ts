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
    state: StateOfAny & Record<'theme', Types.State>,
) => state.theme.general;
const getInteractionTheme = (
    state: StateOfAny & Record<'theme', Types.State>,
) => state.theme.interaction;



const selectors = {
    getGeneralTheme,
    getInteractionTheme,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
