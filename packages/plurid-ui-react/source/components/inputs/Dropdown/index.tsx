import React, {
    useState,
    useEffect,
} from 'react';

import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledDropdown,
    StyledDropdownSelected,
    StyledDropdownList,
} from './styled';



interface Item {
    id: string;
    value: string;
}

interface DropdownProps {
    selectables: (Item | string)[];
    selected: string;
    onSelect: any;

    left?: boolean;
    kind?: string;
    dropdownToggled?: boolean;
    setDropdownToggled?: any;

    theme?: Theme;
    level?: number;
    devisible?: boolean;
    round?: boolean;
    width?: string | number;
}


const Dropdown: React.FC<DropdownProps> = (props) => {
    const [showList, setShowList] = useState(false);

    const {
        selected,
        selectables,
        onSelect,

        left,
        kind,
        dropdownToggled,
        setDropdownToggled,

        theme,
        level,
    } = props;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    useEffect(() => {
        if (!dropdownToggled) {
            setShowList(false);
        }
    }, [dropdownToggled]);

    return (
        <StyledDropdown
            theme={_theme}
            left={left}
        >
            <StyledDropdownSelected
                onClick={() => {
                    setShowList(!showList);
                    setDropdownToggled(kind);
                }}
            >
                {selected}
            </StyledDropdownSelected>

            {showList && (
                <StyledDropdownList
                    theme={_theme}
                    left={left}
                    level={_level}
                >
                    <ul>
                        {selectables.map((selectable) => {
                            let selectableID = typeof selectable === 'string'
                                ? selectable
                                : selectable.id;
                            let selectableValue = typeof selectable === 'string'
                                ? selectable
                                : selectable.value;

                            return (
                                <li
                                    key={selectableID}
                                    onClick={() => onSelect(selectable, kind)}
                                    style={{
                                        backgroundColor:
                                            selected === selectableID
                                                ? _level === 2
                                                    ? _theme.backgroundColorSecondary
                                                    : _theme.backgroundColorTertiary
                                                : '',
                                    }}
                                >
                                    {selectableValue}
                                </li>
                            );
                        })}
                    </ul>
                </StyledDropdownList>
            )}
        </StyledDropdown>
    );
}


export default Dropdown;
