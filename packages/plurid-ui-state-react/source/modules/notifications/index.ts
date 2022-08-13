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
        StateWithSlice,
    } from '~data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export type NotificationsState = Notification[];


const initialState: NotificationsState = [];


export const factory = (
    state: NotificationsState = initialState,
) => createSlice({
    name: 'notifications',
    initialState: state,
    reducers: {
        addNotification: (
            state,
            action: PayloadAction<Notification>,
        ) => {
            const newNotification: Notification = {
                ...action.payload,
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
    state: StateWithSlice<'notifications', NotificationsState>,
) => state.notifications;

export const selectors = {
    getAll,
};


export const reducer = slice.reducer;
// #endregion exports
