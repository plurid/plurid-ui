import * as Types from './types';

import {
    initialState
} from './initial';

import {
    resolvers,
} from './resolvers';



export const reducer = (
    state: Types.State = initialState,
    action: Types.Actions,
): Types.State => {
    switch(action.type) {
        case Types.SET_HEAD:
            return resolvers.setHead(state, action);
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
) => reducer(
    state,
    actions,
);
