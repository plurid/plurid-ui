// #region imports
    // #region libraries
    import React from 'react';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region internal
    import {
        StyledInputDescriptor,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface InputDescriptorProperties {
    // #region required
        // #region values
        name: string;
        show: boolean;
        theme: Theme;
        // #endregion values
    // #endregion required
}

const InputDescriptor: React.FC<InputDescriptorProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            name,
            show,
            theme,
            // #endregion values
        // #endregion required
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledInputDescriptor
            theme={theme}
        >
            {show && (
                <>
                    {name}
                </>
            )}
        </StyledInputDescriptor>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default InputDescriptor;
// #endregion exports
