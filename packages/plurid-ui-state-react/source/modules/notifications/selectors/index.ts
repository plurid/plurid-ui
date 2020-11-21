// #region imports
    // #region external
    import {
        StateOfAny,
    } from '#data/interfaces';

    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const getAll = (
    state: StateOfAny & Record<'notifications', Types.State>,
) => state.notifications;



const selectors = {
    getAll,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
