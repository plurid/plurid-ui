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
        DispatchAction,
        Notification,
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
        data: Notification;
        theme: Theme;
        // #endregion values

        // #region methods
        remove: DispatchAction<typeof notifications.actions.removeNotification>;
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
        wordBreak,
    } = data;

    const resolvedWordBreak = wordBreak === false ? 'normal' : 'break-all';
    // #endregion properties


    // #region references
    const notificationTimeout = useRef<NodeJS.Timeout | null>(null);
    // #endregion references


    // #region effects
    useEffect(() => {
        if (timeout) {
            notificationTimeout.current = setTimeout(() => {
                remove(id);
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
    const resolveRender = () => {
        const contentProperties = {
            wordBreak: resolvedWordBreak,
        };

        if (html) {
            return (
                <StyledNotificationContent
                    dangerouslySetInnerHTML={createMarkup(text)}
                    {...contentProperties}
                />
            );
        }

        if (react && elements && elements[text]) {
            return (
                <StyledNotificationContent
                    {...contentProperties}
                >
                    {elements[text]}
                </StyledNotificationContent>
            );
        }

        return (
            <StyledNotificationContent
                {...contentProperties}
            >
                {text}
            </StyledNotificationContent>
        );
    }

    const content = resolveRender();

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
                    atClick={() => remove(id)}
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
