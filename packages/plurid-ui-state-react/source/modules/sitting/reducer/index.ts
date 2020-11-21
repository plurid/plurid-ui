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
        case Types.SET_SITTING_CURRENT_LINK:
            return resolvers.setSittingCurrentLink(state, action);
        case Types.TOGGLE_SITTING_TRAY:
            return resolvers.toggleSittingTray(state, action);
        default:
            return {
                ...state,
            };
    }
}


const metareducer = (
    initialState: Types.State,
) => (
    state: Types.State = initialState,
    action: Types.Actions,
) => reducer(
    state,
    action,
);
// #endregion module



// #region exports
export {
    reducer,
    metareducer,
};
// #endregion exports
