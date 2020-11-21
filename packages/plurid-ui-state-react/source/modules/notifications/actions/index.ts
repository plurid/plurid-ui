// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const addNotification = (
    payload: Types.AddNotificationPayload,
): Types.AddNotificationAction => {
    return {
        type: Types.ADD_NOTIFICATION,
        payload,
    };
}


const updateNotification = (
    payload: Types.UpdateNotificationPayload,
): Types.UpdateNotificationAction => {
    return {
        type: Types.UPDATE_NOTIFICATION,
        payload,
    };
}


const removeNotification = (
    payload: Types.RemoveNotificationPayload,
): Types.RemoveNotificationAction => {
    return {
        type: Types.REMOVE_NOTIFICATION,
        payload,
    };
}



const actions = {
    addNotification,
    updateNotification,
    removeNotification,
};

// #endregion module



// #region exports
export default actions;
// #endregion exports
