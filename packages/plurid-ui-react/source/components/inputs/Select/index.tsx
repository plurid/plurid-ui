import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledSelect,
} from './styled';



interface PluridSelectProperties {
    selectables: string[];
    atChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    theme?: Theme;
    level?: number;
    devisible?: boolean;
    round?: boolean;
    width?: string | number;
}


/**
 * @param selectables `string[]`
 * @param atChange `(event: React.ChangeEvent<HTMLInputElement>) => void`
 *
 * @param theme optional - `Theme`
 * @param level optional - `number`
 * @param devisible optional - `boolean`
 * @param round optional - `boolean`
 * @param width optional - `string | number`
 */
const PluridSelect: React.FC<PluridSelectProperties> = (properties) => {
    const {
        selectables,
        atChange,

        theme,
        level,
        devisible,
        round,
        width,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _round = round === undefined
        ? true
        : round;

    return (
        <StyledSelect
            theme={_theme}
            level={_level}
            devisible={devisible}
            round={_round}
            width={width}
        >
            <select>
                {selectables.map(selectable => {
                    return (
                        <option
                            key={selectable}
                            value={selectable}
                        >
                            {selectable}
                        </option>
                    );
                })}
            </select>
        </StyledSelect>
    );
}


export default PluridSelect;
