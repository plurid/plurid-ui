// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const setHead = (
    state: Types.State,
    action: Types.SetHeadAction,
): Types.State => {
    return {
        ...state,
        ...action.payload,
    };
}



const resolvers = {
    setHead,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
