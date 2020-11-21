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
        case Types.SET_THEME:
            return resolvers.setTheme(state, action);
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
