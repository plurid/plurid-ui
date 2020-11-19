import React, {
    useState,
    useEffect,
} from 'react';
import { connect } from 'react-redux';

import {
    PluridIconCopy,
} from '@plurid/plurid-icons-react';

import {
    clipboard,
} from '@plurid/plurid-functions';

import {
    StyledStateLink,
    StyledStateLinkContainer,
    StyledStateLinkText,
    StyledStateLinkCopy,
} from './styled';

import {
    StyledSittingTrayItem,
    StyledSittingTrayItemHeader,
    StyledSittingTrayItemBody,
} from '../../styled';



interface StateLinkProperties {
    theme: any;
    currentLink: string;
}

const StateLink: React.FC<StateLinkProperties> = (
    properties,
) => {
    const {
        // theme,
        currentLink,
    } = properties;

    const copyStateLink = () => {
        clipboard.copy(currentLink);
        setCurrentStateLink('copied link');
        setTimeout(() => {
            setCurrentStateLink(currentLink);
        }, 650);
    }

    const [currentStateLink, setCurrentStateLink] = useState(currentLink);

    useEffect(() => {
        setCurrentStateLink(currentLink);
    }, [
        currentLink,
    ]);

    return (
        <StyledStateLink>
            <StyledSittingTrayItem>
                <StyledSittingTrayItemHeader>
                    <div>
                        <h4>
                            state link
                        </h4>
                    </div>

                    <div
                        style={{justifySelf: 'right'}}
                    >
                        <StyledStateLinkCopy
                            onClick={copyStateLink}
                        >
                            <PluridIconCopy />
                        </StyledStateLinkCopy>
                    </div>
                </StyledSittingTrayItemHeader>

                <StyledSittingTrayItemBody>
                    <StyledStateLinkContainer>
                        <StyledStateLinkText>
                            {currentStateLink}
                        </StyledStateLinkText>
                    </StyledStateLinkContainer>
                </StyledSittingTrayItemBody>
            </StyledSittingTrayItem>
        </StyledStateLink>
    );
}


const mapStateToProps = (
    state: any,
    ownProperties: any,
) => ({
    theme: ownProperties.selectors.themes.getInteractionTheme(state),
    currentLink: ownProperties.selectors.sitting.getCurrentLink(state),
});


const mapDispatchToProps = (
    dispatch: any,
) => ({
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StateLink);
