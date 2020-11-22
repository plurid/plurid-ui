// #region imports
    // #region libraries
    import React from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';

    import {
        StateOfAny,
        themes as themesStateService,
        notifications as notificationsStateService,
    } from '@plurid/plurid-ui-state-react';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import Notification from '../Notification';
    // #endregion external


    // #region internal
    import {
        StyledNotifications,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export type NotificationsState = StateOfAny & {
    themes: themesStateService.Types.State;
    notifications: notificationsStateService.Types.State;
}

export type NotificationsSelectors = StateOfAny & {
    themes: typeof themesStateService.selectors;
    notifications: typeof notificationsStateService.selectors;
}

export interface NotificationsOwnProperties {
    selectors: NotificationsSelectors;
    context: React.Context<any>;
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
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        stateNotifications,
        // #endregion state

        // #region dispatch
        dispatchRemoveNotification,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region render
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
    // #endregion render
}


const mapStateToProperties =(
    state: NotificationsState,
    ownProperties: NotificationsOwnProperties,
): NotificationsStateProperties => ({
    stateGeneralTheme: ownProperties.selectors.themes.getGeneralTheme(state),
    stateNotifications: ownProperties.selectors.notifications.getAll(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NotificationsDispatchProperties => ({
    dispatchRemoveNotification: (
        payload,
    ) => dispatch(
        notificationsStateService.actions.removeNotification(payload),
    ),
});


const ConnectedNotifications = connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Notifications);
// #endregion module



// #region exports
export default ConnectedNotifications;
// #endregion exports
