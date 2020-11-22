import React, {
    useState,
    // useContext,
} from 'react';
import { connect } from 'react-redux';

// import Context, {
//     InitialContext,
// } from '../../../../../../../services/utilities/context';

// import { GENERAL_VIEW } from '../../../../../../../data/constants/views';

import {
    StyledStateLine,
    StyledSliderStateButton,
    StyledSliderStateSliderContainer,
    // StyledSliderStateSittings,
    StyledStateLineButtons,
    StyledStateLineButton,
    StyledStateLineContainer,
} from './styled';

import {
    StyledSittingTrayItem,
    StyledSittingTrayItemHeader,
    StyledSittingTrayItemBody,
} from '../../styled';

// import Slider from '../../../../../../Slider';

import {
    PluridIconNewStateline,
    PluridIconPlay,
    PluridIconBranch
} from '@plurid/plurid-icons-react';

// import actions from '../../../../../../../services/state/actions';
// import selectors from '../../../../../../../services/state/selectors';



interface StateLineProperties {
    theme: any;
}

const StateLine: React.FC<StateLineProperties> = (
    properties,
) => {
    // const context: InitialContext = useContext(Context);

    // const {
    //     theme,
    // } = properties;

    const [stateIndex, setStateIndex] = useState(0);

    // const {
        // setView,
        // recorder,
    // } = context;

    // const allStates = recorder.all();

    // const maxStateSlider = allStates.length + 5;
    const maxStateSlider = 5;
    // const maxStateSlider = allStates.length - 1;

    // const handleStateSliderInput = (value: string) => {
    //     setStateIndex(parseInt(value));
    // }

    const handleStateIndex = (type: string) => {
        switch (type) {
            case 'DECREASE':
                if (stateIndex - 1 >= 0) {
                    setStateIndex(stateIndex - 1);
                } else {
                    setStateIndex(0);
                }
                // recorder.previous();
                break;
            case 'INCREASE':
                if (stateIndex + 1 <= maxStateSlider) {
                    setStateIndex(stateIndex + 1);
                } else {
                    setStateIndex(maxStateSlider);
                }
                // recorder.next();
                break;
        }
    }

    return (
        <StyledStateLine>
            <StyledSittingTrayItem>
                <StyledSittingTrayItemHeader>
                    <div>
                        <h4>
                            state line
                        </h4>
                    </div>

                    <div>
                        <StyledStateLineButtons>
                            <StyledStateLineButton>
                                {/* onClick go to the end of state line  */}
                                <PluridIconPlay />
                            </StyledStateLineButton>

                            <StyledStateLineButton>
                                {/* onClick create new state branch */}
                                <PluridIconBranch />
                            </StyledStateLineButton>

                            <StyledStateLineButton>
                                {/* onClick end current sitting and start new one */}
                                <PluridIconNewStateline />
                            </StyledStateLineButton>
                        </StyledStateLineButtons>
                    </div>
                </StyledSittingTrayItemHeader>

                <StyledSittingTrayItemBody>
                    <StyledStateLineContainer>
                        <div
                            style={{display: 'grid', justifyContent: 'left'}}
                        >
                            {stateIndex !== 0 && (
                                <StyledSliderStateButton
                                    onClick={() => handleStateIndex('DECREASE')}
                                >
                                    ◀
                                </StyledSliderStateButton>
                            )}
                        </div>

                        <StyledSliderStateSliderContainer>
                            {/* {maxStateSlider !== 0 && (
                                <Slider
                                    theme={theme}
                                    value={stateIndex}
                                    min={0}
                                    max={maxStateSlider}
                                    step={1}
                                    hideValue={true}
                                    defaultValue={50}
                                    handleInput={handleStateSliderInput}
                                    width={110}
                                />
                            )} */}
                        </StyledSliderStateSliderContainer>

                        <div
                            style={{display: 'grid', justifyContent: 'right'}}
                        >
                            {stateIndex !== maxStateSlider && (
                                <StyledSliderStateButton
                                    onClick={() => handleStateIndex('INCREASE')}
                                >
                                    ▶
                                </StyledSliderStateButton>
                            )}
                        </div>
                    </StyledStateLineContainer>
                </StyledSittingTrayItemBody>
            </StyledSittingTrayItem>
        </StyledStateLine>
    );
}


const mapStateToProps = (
    state: any,
    ownProperties: any,
) => ({
    theme: ownProperties.selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProps = (
    dispatch: any,
) => ({
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StateLine);
