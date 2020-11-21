// #region imports
    // #region external
    import {
        StateOfAny,
    } from '#data/interfaces';

    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const getCurrentLink = (
    state: StateOfAny & Record<'sitting', Types.State>,
) => state.sitting.currentLink;
const getTray = (
    state: StateOfAny & Record<'sitting', Types.State>,
) => state.sitting.tray;



const selectors = {
    getCurrentLink,
    getTray,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
