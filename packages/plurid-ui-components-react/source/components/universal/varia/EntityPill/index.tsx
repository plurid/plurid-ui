// #region imports
    // #region libraries
    import React from 'react';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridIconDelete,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region internal
    import {
        StyledEntityPill,
    } from './styled';
    // #endregion internal
// #region imports



// #region module
export interface EntityPillProperties {
    // #region required
        // #region values
        theme: Theme;
        id: string;
        // #endregion values

        // #region methods
        remove: (
            id: string,
        ) => void;
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        text?: string;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion optional
}

const EntityPill: React.FC<EntityPillProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            theme,
            id,
            // #endregion values

            // #region methods
            remove,
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            text,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;

    const textValue = text || id;
    // #endregion properties


    // #region render
    return (
        <StyledEntityPill
            theme={theme}
        >
            <div
                style={{
                    marginRight: '0.5rem',
                }}
            >
                {textValue}
            </div>

            <PluridIconDelete
                theme={theme}
                atClick={() => remove(id)}
            />
        </StyledEntityPill>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default EntityPill;
// #endregion exports
