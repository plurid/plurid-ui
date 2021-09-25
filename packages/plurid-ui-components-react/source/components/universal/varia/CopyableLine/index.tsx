// #region imports
    // #region libraries
    import React from 'react';

    import {
        clipboard,
    } from '@plurid/plurid-functions';

    import {
        useFalseAfterTimedTrue,
    } from '@plurid/plurid-functions-react';

    import {
        PluridIconCopy,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region internal
    import {
        StyledCopyableLine,
        StyledData,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface CopyableLineProperties {
    // #region required
        // #region values
        /**
         * Data to be copied.
         */
        data: string;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        /**
         * Data to be shown.
         */
        viewData?: string;
        copyMessage?: string;
        copyMessageTime?: number;

        style?: React.CSSProperties;
        className?: string;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion optional
}

const CopyableLine: React.FC<CopyableLineProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            data,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            viewData,
            copyMessage,
            copyMessageTime,

            style,
            className,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;

    const viewDataText = viewData || data;
    const copyMessageText = copyMessage ?? 'copied';
    const copyMessageTimeValue = copyMessageTime || 2_000;
    // #endregion properties


    // #region state
    const [
        showCopyMessage,
        setShowCopyMessage,
    ] = useFalseAfterTimedTrue(copyMessageTimeValue);
    // #endregion state


    // #region render
    return (
        <StyledCopyableLine
            style={{
                ...style,
            }}
            className={className}
        >
            <PluridIconCopy
                atClick={() => {
                    clipboard.copy(data);

                    setShowCopyMessage(true);
                }}
            />

            <StyledData>
                {showCopyMessage ? (
                    <>
                        {copyMessageText}
                    </>
                ) : (
                    <>
                        {viewDataText}
                    </>
                )}
            </StyledData>
        </StyledCopyableLine>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default CopyableLine;
// #endregion exports
