// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const addNotification = (
    state: Types.State,
    action: Types.AddNotificationAction,
): Types.State => {
    const newNotification: Types.Notification = {
        ...action.payload,
    };

    return [
        ...state,
        newNotification,
    ];
}


const updateNotification = (
    state: Types.State,
    action: Types.UpdateNotificationAction,
): Types.State => {
    const updatedState = state.map(notification => {
        if (notification.id === action.payload.id) {
            const newNotification: Types.Notification = {
                ...action.payload,
            };
            return newNotification;
        }

        return {
            ...notification,
        };
    });

    return [
        ...updatedState,
    ];
}


const removeNotification = (
    state: Types.State,
    action: Types.RemoveNotificationAction,
): Types.State => {
    const updatedState = state.filter(
        notification => notification.id !== action.payload.id
    );

    return [
        ...updatedState,
    ];
}



const resolvers = {
    addNotification,
    updateNotification,
    removeNotification,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
