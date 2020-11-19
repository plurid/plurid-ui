// #region imports
    // #region libraries
    import React, {
        useRef,
        useState,
        useEffect,
    } from 'react';

    import {
        clipboard,
    } from '@plurid/plurid-functions';

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
    data: string,
}

const CopyableLine: React.FC<CopyableLineProperties> = (
    properties,
) => {
    // #region properties
    const {
        data,
    } = properties;
    // #endregion properties


    // #region references
    const mounted = useRef(true);
    // #endregion references


    // #region state
    const [
        showData,
        setShowData,
    ] = useState(true);
    // #endregion state


    // #region effects
    useEffect(() => {
        setTimeout(() => {
            if (!mounted.current) {
                return;
            }

            if (!showData) {
                setShowData(true);
            }
        }, 2000);
    }, [
        showData,
    ]);

    useEffect(() => {
        return () => {
            mounted.current = false;
        }
    }, []);
    // #endregion effects


    // #region render
    return (
        <StyledCopyableLine>
            <PluridIconCopy
                atClick={() => {
                    clipboard.copy(data);
                    setShowData(false);
                }}
            />

            <StyledData>
                {showData ? (
                    <>
                        {data}
                    </>
                ) : (
                    <>
                        copied
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
