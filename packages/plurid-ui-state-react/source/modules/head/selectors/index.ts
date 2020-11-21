// #region imports
    // #region external
    import {
        StateOfAny,
    } from '#data/interfaces';

    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const getHeadData = (state: StateOfAny & Record<'head', Types.State>) => state.head;


const selectors = {
    getHeadData,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
