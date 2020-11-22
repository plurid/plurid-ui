import React, {
    useState,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconObliterate,
} from '@plurid/plurid-icons-react';

import {
    StyledFormObliterate,
    StyledObliterateContainer,
} from './styled';

import Formbutton from '../Formbutton';

import LinkButton from '../../buttons/LinkButton';
import PureButton from '../../buttons/PureButton';



export interface FormObliterateProperties {
    atObliterate: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    item?: string;

    theme?: Theme;
    devisible?: boolean;
    level?: number;

    style?: React.CSSProperties;
    className?: string;
}

/**
 * Renders an icon and a descriptive text, button-like.
 *
 * @param properties
 */
const FormObliterate: React.FC<FormObliterateProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** required */
        atObliterate,

        /** optional */
        item,

        theme,
        devisible,
        level,

        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _devisible = devisible === undefined
        ? false
        : devisible;


    /** state */
    const [showObliterate, setShowObliterate] = useState(false);


    /** handlers */
    const handleObliterate = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        setShowObliterate(false);
        atObliterate(event);
    }


    /** render */
    return (
        <StyledFormObliterate
            theme={_theme}
            level={_level}
            devisible={_devisible}
            style={{
                ...style,
            }}
            className={className}
        >
            {!showObliterate && (
                <Formbutton
                    theme={_theme}
                    text={item ? `obliterate ${item}` : 'obliterate'}
                    Icon={PluridIconObliterate}
                    atClick={() => setShowObliterate(true)}
                    devisible={true}
                />
            )}

            {showObliterate && (
                <StyledObliterateContainer>
                    <div>
                        remove forever?
                    </div>

                    <LinkButton
                        theme={_theme}
                        text="cancel"
                        atClick={() => setShowObliterate(false)}
                    />

                    <PureButton
                        theme={_theme}
                        text="Obliterate"
                        atClick={(event) => handleObliterate(event as any)}
                    />
                </StyledObliterateContainer>
            )}
        </StyledFormObliterate>
    );
}


export default FormObliterate;
