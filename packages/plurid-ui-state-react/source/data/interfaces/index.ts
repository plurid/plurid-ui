// #region module
export interface StateOfAny {
    [key: string]: any;
}

export type StateWithSlice<
    Key extends string,
    State = any,
> = StateOfAny & Record<Key, State>;


export interface Notification {
    id: string;
    text: string;
    html?: boolean;
    react?: boolean;
    timeout?: number;
    wordBreak?: boolean;
}
// #endregion module
