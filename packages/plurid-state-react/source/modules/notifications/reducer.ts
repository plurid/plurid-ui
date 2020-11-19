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
        case Types.ADD_NOTIFICATION:
            return resolvers.addNotification(state, action);
        case Types.UPDATE_NOTIFICATION:
            return resolvers.updateNotification(state, action);
        case Types.REMOVE_NOTIFICATION:
            return resolvers.removeNotification(state, action);
        default:
            return [
                ...state,
            ];
    }
}
