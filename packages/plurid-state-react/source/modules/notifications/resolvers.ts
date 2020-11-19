import {
    Notification,
} from '@plurid/apps.libraries.data.interfaces.global';

import * as Types from './types';



export const addNotification = (
    state: Types.State,
    action: Types.AddNotificationAction,
): Types.State => {
    const newNotification: Notification = { ...action.payload };

    return [
        ...state,
        newNotification,
    ];
}


export const updateNotification = (
    state: Types.State,
    action: Types.UpdateNotificationAction,
): Types.State => {
    const updatedState = state.map(message => {
        if (message.id === action.payload.id) {
            const newNotification: Notification = { ...action.payload };
            return newNotification;
        }
        return { ...message };
    });

    return updatedState;
}


export const removeNotification = (
    state: Types.State,
    action: Types.RemoveNotificationAction,
): Types.State => {
    const updatedState = state.filter(
        message => message.id !== action.payload.id
    );
    return [
        ...updatedState,
    ];
}



export const resolvers = {
    addNotification,
    updateNotification,
    removeNotification,
};
