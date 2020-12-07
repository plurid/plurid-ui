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
        case Types.ADD_NOTIFICATION:
            return resolvers.addNotification(state, action);
        case Types.UPDATE_NOTIFICATION:
            return resolvers.updateNotification(state, action);
        case Types.REMOVE_NOTIFICATION:
            return resolvers.removeNotification(state, action);
        default:
            return [
                ...state,
            ];
    }
}
// #endregion module



// #region exports
export {
    reducer,
};
// #endregion exports
