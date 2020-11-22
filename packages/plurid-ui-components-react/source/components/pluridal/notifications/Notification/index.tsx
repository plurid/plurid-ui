// #region imports
    // #region libraries
    import React, {
        useRef,
        useEffect,
    } from 'react';

    import {
        notifications,
    } from '@plurid/plurid-ui-state-react';

    import {
        PluridIconDelete,
    } from '@plurid/plurid-icons-react';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        createMarkup,
    } from '#utilities/react';
    // #endregion external


    // #region internal
    import {
        StyledNotification,
        StyledNotificationContent,
        StyledNotificationClose,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface NotificationOwnProperties {
    // #region required
        // #region values
        data: notifications.Types.Notification;
        theme: Theme;
        // #endregion values

        // #region methods
        remove: (
            payload: notifications.Types.RemoveNotificationPayload,
        ) => void;
        // #endregion methods
    // #endregion required
}

export type NotificationProperties = NotificationOwnProperties;

const Notification: React.FC<NotificationProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            data,
            theme,
            // #endregion values

            // #region methods
            remove,
            // #endregion methods
        // #endregion required
    } = properties;

    const {
        id,
        text,
        html,
        timeout,
    } = data;
    // #endregion properties


    // #region references
    const notificationTimeout = useRef(0);
    // #endregion references


    // #region effects
    useEffect(() => {
        if (timeout) {
            notificationTimeout.current = setTimeout(() => {
                remove({id});
            }, timeout);
        }

        return () => {
            if (notificationTimeout.current) {
                clearTimeout(notificationTimeout.current);
            }
        }
    }, [
        id,
        timeout,
        remove,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledNotification
            theme={theme}
        >
            {!html
                ? (
                    <StyledNotificationContent>
                        {text}
                    </StyledNotificationContent>
                ) : (
                    <StyledNotificationContent
                        dangerouslySetInnerHTML={createMarkup(text)}
                    />
                )
            }

            <StyledNotificationClose>
                <PluridIconDelete
                    atClick={() => remove({id})}
                />
            </StyledNotificationClose>
        </StyledNotification>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Notification;
// #endregion exports
