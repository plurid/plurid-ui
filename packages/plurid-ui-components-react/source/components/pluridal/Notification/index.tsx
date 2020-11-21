import React, {
    useRef,
    useEffect,
} from 'react';

import {
    Notification as INotification,
} from '@plurid/plurid-state-react';

import {
    PluridIconDelete,
} from '@plurid/plurid-icons-react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledNotification,
    StyledNotificationContent,
    StyledNotificationClose,
} from './styled';




const createMarkup = (text: string) => {
    return {
        __html: text,
    };
}

interface NotificationOwnProperties {
    data: INotification;
    theme: Theme;
    remove: (payload: any) => void;
}

type NotificationProperties = NotificationOwnProperties;

const Notification: React.FC<NotificationProperties> = (
    properties,
) => {
    const notificationTimeout = useRef(0);

    const {
        /** own */
        data,
        theme,
        remove,
    } = properties;

    const {
        id,
        text,
        html,
        timeout,
    } = data;

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
}


export default Notification;
