import React, {
    useState,
    // useContext,
} from 'react';

// import Context from '../../context';

import {
    StyledStateShareImage,
    StyledStateShareImageButtons,
    StyledStateShareImagePasteContainer,
    StyledStateShareImageButtonsCopy,
} from './styled';

import {
    PluridIconCopyCurrentState,
    PluridIconCopyStateHistory,
} from '@plurid/plurid-icons-react';

// import stateShareImageIcon from '../../../../../../../assets/state-share-image.png';



interface StateShareImageProperties {
}

const StateShareImage: React.FC<StateShareImageProperties> = (
    properties,
) => {
    // const context: any = useContext(Context);

    const [message, setMessage] = useState('');
    const [showPaste, setShowPaste] = useState(false);

    const copyCurrentState = () => {
        setMessage('copied state image');
        setTimeout(() => {
            setMessage('');
        }, 2000);
    }

    const copyStateHistory = () => {
        setMessage('copied state history');
        setTimeout(() => {
            setMessage('');
        }, 2000);
    }

    const paste = () => {
        setShowPaste(false);
    }

    return (
        <StyledStateShareImage>
            {!message && !showPaste && (
                <StyledStateShareImageButtons>
                    <StyledStateShareImageButtonsCopy
                    >
                        <div
                            onClick={copyCurrentState}
                        >
                            <PluridIconCopyCurrentState />
                        </div>

                        <div
                            onClick={copyStateHistory}
                        >
                            <PluridIconCopyStateHistory />
                        </div>
                    </StyledStateShareImageButtonsCopy>

                    <div style={{display: 'grid', alignItems: 'center'}}>
                        {/* <img src={stateShareImageIcon} alt="state share" height={20} /> */}
                    </div>

                    <div
                        onClick={() => setShowPaste(true)}
                    >
                        paste
                    </div>
                </StyledStateShareImageButtons>
            )}

            {message && !showPaste && (
                <div>
                    {message}
                </div>
            )}

            {showPaste && (
                <StyledStateShareImagePasteContainer>
                    <input
                        type="text"
                    />
                    <div
                        onClick={paste}
                    >
                        paste
                    </div>
                </StyledStateShareImagePasteContainer>
            )}
        </StyledStateShareImage>
    );
}


export default StateShareImage;
