import React from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    notifications as notificationsStateService,
} from '@plurid/plurid-ui-state-react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledNotifications,
} from './styled';

import Notification from '../Notification';



export interface NotificationsOwnProperties {
    selectors: any;
    context: any;
}

export interface NotificationsStateProperties {
    stateGeneralTheme: Theme;
    stateNotifications: notificationsStateService.Types.Notification[];
}

export interface NotificationsDispatchProperties {
    dispatchRemoveNotification: typeof notificationsStateService.actions.removeNotification;
}

export type NotificationsProperties = NotificationsOwnProperties
    & NotificationsStateProperties
    & NotificationsDispatchProperties;

const Notifications: React.FC<NotificationsProperties> = (
    properties
) => {
    /** properties */
    const {
        /** state */
        stateGeneralTheme,
        stateNotifications,

        /** dispatch */
        dispatchRemoveNotification,
    } = properties;


    /** render */
    return (
        <StyledNotifications>
            {stateNotifications.map(notification => {
                return (
                    <Notification
                        key={notification.id}
                        data={notification}
                        theme={stateGeneralTheme}
                        remove={dispatchRemoveNotification}
                    />
                );
            })}
        </StyledNotifications>
    );
}


const mapStateToProps =(
    state: any,
    ownProperties: any,
): NotificationsStateProperties => ({
    stateGeneralTheme: ownProperties.selectors.themes.getGeneralTheme(state),
    stateNotifications: ownProperties.selectors.notifications.getAll(state),
});


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NotificationsDispatchProperties => ({
    dispatchRemoveNotification: (
        payload,
    ) => dispatch(
        notificationsStateService.actions.removeNotification(payload),
    ),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);
