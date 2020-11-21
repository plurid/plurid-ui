// #region imports
    // #region external
    import * as Types from '../types';

    import initialState from '../initial';

    import resolvers from '../resolvers';
    // #endregion external
// #endregion imports



// #region module
const reducer = (
    state: Types.State = initialState,
    action: Types.Actions,
): Types.State => {
    switch(action.type) {
        case Types.TOGGLE_GLOBAL_SHORTCUTS:
            return resolvers.toggleGlobalShortcuts(state, action);
        default:
            return {
                ...state,
            };
    }
}
// #endregion module



// #region exports
export {
    reducer,
};
// #endregion exports
