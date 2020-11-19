import React, {
    useState,
} from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconStateShareImage,
    PluridIconCopyCurrentState,
    PluridIconCopyStateHistory,
} from '@plurid/plurid-icons-react';

import {
    StyledStateImage,
    StyledStateShareImage,
    StyledStateShareImageButtons,
    StyledStateShareImagePasteContainer,
    StyledStateShareImageButtonsCopy,
} from './styled';

import {
    StyledSittingTrayItem,
    StyledSittingTrayItemHeader,
    StyledSittingTrayItemBody,
} from '../../styled';



interface StateImageOwnProperties {
    selectors: any;
}

interface StateImageStateProperties {
    stateInteractionTheme: Theme;
}

interface StateImageDispatchProperties {
}

type StateImageProperties = StateImageOwnProperties
    & StateImageStateProperties
    & StateImageDispatchProperties;

const StateImage: React.FC<StateImageProperties> = (
    properties,
) => {
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
        <StyledStateImage>
            <StyledSittingTrayItem>
                <StyledSittingTrayItemHeader>
                    <div>
                        <h4>
                            state image
                        </h4>
                    </div>

                    <div>
                        <div
                            style={{
                                display: 'grid',
                                alignItems: 'center',
                                justifyContent: 'right',
                            }}
                        >
                            <PluridIconStateShareImage />
                        </div>
                    </div>
                </StyledSittingTrayItemHeader>

                <StyledSittingTrayItemBody>
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
                </StyledSittingTrayItemBody>
            </StyledSittingTrayItem>
        </StyledStateImage>
    );
}


const mapStateToProps = (
    state: any,
    ownProperties: any,
) => ({
    theme: ownProperties.selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => ({
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StateImage);
