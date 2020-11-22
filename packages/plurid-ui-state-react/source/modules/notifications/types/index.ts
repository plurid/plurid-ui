// #region module
export interface Notification {
    id: string;
    text: string;
    html?: boolean;
    react?: boolean;
    timeout?: number;
}


export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export interface AddNotificationPayload extends Notification {}
export interface AddNotificationAction {
    type: typeof ADD_NOTIFICATION;
    payload: AddNotificationPayload;
}


export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
export interface UpdateNotificationPayload extends Notification {}
export interface UpdateNotificationAction {
    type: typeof UPDATE_NOTIFICATION;
    payload: UpdateNotificationPayload;
}


export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export interface RemoveNotificationPayload {
    id: string;
}
export interface RemoveNotificationAction {
    type: typeof REMOVE_NOTIFICATION;
    payload: RemoveNotificationPayload;
}



export type State = Notification[];


export type Actions = AddNotificationAction
    | UpdateNotificationAction
    | RemoveNotificationAction;
// #endregion module
