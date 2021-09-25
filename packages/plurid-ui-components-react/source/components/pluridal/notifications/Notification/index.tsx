// #region imports
    // #region libraries
    import React, {
        useRef,
        useEffect,
    } from 'react';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        notifications,
    } from '@plurid/plurid-ui-state-react';

    import {
        PluridIconDelete,
    } from '@plurid/plurid-icons-react';

    import {
        createMarkup,
    } from '@plurid/plurid-functions-react';
    // #endregion libraries


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

    // #region optional
        // #region values
        elements?: Record<string, JSX.Element>;
        style?: React.CSSProperties;
        className?: string;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion optional
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

        // #region optional
            // #region values
            elements,
            style,
            className,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;

    const {
        id,
        text,
        html,
        react,
        timeout,
    } = data;
    // #endregion properties


    // #region references
    const notificationTimeout = useRef<NodeJS.Timeout | null>(null);
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
    const content = html
        ? (
            <StyledNotificationContent
                dangerouslySetInnerHTML={createMarkup(text)}
            />
        ) : react && elements && elements[text]
            ? (
                <StyledNotificationContent>
                    {elements[text]}
                </StyledNotificationContent>
            ) : (
                <StyledNotificationContent>
                    {text}
                </StyledNotificationContent>
            );

    return (
        <StyledNotification
            theme={theme}
            style={{
                ...style,
            }}
            className={className}
        >
            {content}

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
