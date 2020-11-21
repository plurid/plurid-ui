import * as Types from './types';

import {
    initialState,
} from './initial';

import {
    resolvers,
} from './resolvers';



export const reducer = (
    state: Types.State = initialState,
    action: Types.Actions,
): Types.State => {
    switch(action.type) {
        case Types.SET_SITTING_CURRENT_LINK:
            return resolvers.setSittingCurrentLink(state, action);
        case Types.TOGGLE_SITTING_TRAY:
            return resolvers.toggleSittingTray(state, action);
        default:
            return {
                ...state,
            };
    }
}


export const metareducer = (
    initialState: Types.State,
) => (
    state: Types.State = initialState,
    actions: Types.Actions,
) => reducer(state, actions);
