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
    selected: Item | string;
    atSelect: (selection: Item | string, kind?: string) => void;

    left?: boolean;
    kind?: string;
    dropdownToggled?: boolean;
    setDropdownToggled?: any;
    hideAtSelect?: boolean;

    theme?: Theme;
    level?: number;
    devisible?: boolean;
    round?: boolean;
    width?: string | number;
}


const Dropdown: React.FC<DropdownProps> = (props) => {

    const {
        selected,
        selectables,
        atSelect,

        left,
        kind,
        dropdownToggled,
        setDropdownToggled,
        hideAtSelect,

        theme,
        level,
    } = props;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _hideAtSelect = hideAtSelect === undefined
        ? true
        : hideAtSelect;

    const [showList, setShowList] = useState(false);
    const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(_theme.backgroundColorTertiary);

    const handleSelect = (selected: string | Item) => {
        kind ? atSelect(selected, kind) : atSelect(selected);
        _hideAtSelect ? setShowList(false) : null;
    }

    useEffect(() => {
        if (!dropdownToggled) {
            setShowList(false);
        }
    }, [dropdownToggled]);

    useEffect(() => {
        if (_level === 2) {
            setSelectedBackgroundColor(_theme.backgroundColorSecondary);
        } else {
            setSelectedBackgroundColor(_theme.backgroundColorTertiary);
        }
    }, [_level]);

    return (
        <StyledDropdown
            theme={_theme}
            left={left}
        >
            <StyledDropdownSelected
                onClick={() => {
                    setShowList(!showList);

                    if (setDropdownToggled) {
                        setDropdownToggled(kind);
                    }
                }}
            >
                {typeof selected === 'string'
                    ? selected
                    : selected.value
                }
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

                            let isSelected = false;
                            if (typeof selected === 'string') {
                                if (selected === selectableID) {
                                    isSelected = true;
                                }
                            } else {
                                if (selected.id === selectableID) {
                                    isSelected = true;
                                }
                            }

                            return (
                                <li
                                    key={selectableID}
                                    onClick={() => handleSelect(selectable)}
                                    style={{
                                        backgroundColor: isSelected
                                            ? selectedBackgroundColor
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
