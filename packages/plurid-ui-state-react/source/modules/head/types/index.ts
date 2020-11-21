// #region module
export interface Head {
    title: string;
    description: string;
    ogTitle: string;
    ogImage: string;
    ogURL: string;
    ogDescription: string;
    canonicalURL: string;
}


export const SET_HEAD = 'SET_HEAD';
export interface SetHeadPayload extends Partial<Head> {}
export interface SetHeadAction {
    type: typeof SET_HEAD;
    payload: SetHeadPayload;
}



export interface State extends Head {}


export type Actions =
    | SetHeadAction;
// #endregion module
