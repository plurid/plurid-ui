// #region imports
    // #region external
    import {
        StateOfAny,
    } from '#data/interfaces';

    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const getGlobal = (
    state: StateOfAny & Record<'shortcuts', Types.State>,
) => state.shortcuts.global;



const selectors = {
    getGlobal,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
