import * as Types from './types';



export const addNotification = (
    payload: Types.AddNotificationPayload,
): Types.AddNotificationAction => {
    return {
        type: Types.ADD_NOTIFICATION,
        payload,
    };
}


export const updateNotification = (
    payload: Types.UpdateNotificationPayload,
): Types.UpdateNotificationAction => {
    return {
        type: Types.UPDATE_NOTIFICATION,
        payload,
    };
}


export const removeNotification = (
    payload: Types.RemoveNotificationPayload,
): Types.RemoveNotificationAction => {
    return {
        type: Types.REMOVE_NOTIFICATION,
        payload,
    };
}


export const actions = {
    addNotification,
    updateNotification,
    removeNotification,
};
