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
} from './styled';

import Formbutton from '../Formbutton';



interface FormObliterateProperties {
    item?: string;
    atObliterate: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

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
        item,
        atObliterate,

        /** optional */
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


    /** render */
    return (
        <StyledFormObliterate
            theme={_theme}
            level={_level}
            devisible={_devisible}
            style={style}
            className={className}
        >
            {!showObliterate && (
                <Formbutton
                    theme={_theme}
                    text="obliterate"
                    Icon={PluridIconObliterate}
                    atClick={() => setShowObliterate(true)}
                    devisible={true}
                />
            )}

            {showObliterate && (
                <div>

                </div>
            )}
        </StyledFormObliterate>
    );
}


export default FormObliterate;
