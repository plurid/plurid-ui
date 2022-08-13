// #region imports
    // #region libraries
    import {
        ActionCreatorWithPayload,
        ActionCreatorWithoutPayload,
    } from '@reduxjs/toolkit';
    // #endregion libraries
// #endregion imports



// #region module
export interface StateOfAny {
    [key: string]: any;
}

export type StateWithSlice<
    Key extends string,
    State = any,
> = StateOfAny & Record<Key, State>;



export type DispatchAction<A> = A extends ActionCreatorWithPayload<infer P, infer T>
    ? (payload: P) => ReturnType<ActionCreatorWithPayload<P, T>>
    : void;

export type DispatchActionWithoutPayload<A> = A extends ActionCreatorWithoutPayload<infer T>
    ? () => ReturnType<ActionCreatorWithoutPayload<T>>
    : void;



export interface Notification {
    id: string;
    text: string;
    html?: boolean;
    react?: boolean;
    timeout?: number;
    wordBreak?: boolean;
}
// #endregion module
