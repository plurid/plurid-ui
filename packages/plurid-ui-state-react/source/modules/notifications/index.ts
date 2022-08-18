// #region imports
    // #region libraries
    import {
        createSlice,
        PayloadAction,
    } from '@reduxjs/toolkit';
    // #endregion libraries


    // #region external
    import {
        Notification,
        AddNotificationPayload,
        StateWithSlice,
    } from '~data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export type NotificationsState = Notification[];


const initialState: NotificationsState = [];

const name = 'notifications' as const;


export const factory = (
    state: NotificationsState = initialState,
) => createSlice({
    name,
    initialState: state,
    reducers: {
        addNotification: (
            state,
            action: PayloadAction<AddNotificationPayload>,
        ) => {
            const generatedID = Math.random() + '';
            const id = typeof action.payload === 'string'
                ? generatedID
                : action.payload.id || generatedID;

            const text = typeof action.payload === 'string'
                ? action.payload
                : action.payload.text;

            const rest = typeof action.payload === 'string'
                ? {}
                : {...action.payload};

            const newNotification: Notification = {
                id,
                text,
                ...rest,
            };

            const existingNotification = state.find(
                notification => notification.id === newNotification.id,
            );

            if (existingNotification) {
                state = state.map(notification => {
                    if (notification.id === newNotification.id) {
                        return newNotification;
                    }

                    return notification;
                });

                return;
            }

            state = [
                ...state,
                newNotification,
            ];
        },
        updateNotification: (
            state,
            action: PayloadAction<Notification>,
        ) => {
            state = state.map(message => {
                if (message.id === action.payload.id) {
                    const newNotification: Notification = {
                        ...action.payload,
                    };
                    return newNotification;
                }

                return {
                    ...message,
                };
            });
        },
        removeNotification: (
            state,
            action: PayloadAction<string>,
        ) => {
            state = state.filter(
                message => message.id !== action.payload,
            );
        },
    },
});

export const slice = factory();
// #endregion module



// #region exports
export const actions = slice.actions;


const getAll = (
    state: StateWithSlice<typeof name, NotificationsState>,
) => state.notifications;

export const selectors = {
    getAll,
};


export const reducer = slice.reducer;
// #endregion exports
