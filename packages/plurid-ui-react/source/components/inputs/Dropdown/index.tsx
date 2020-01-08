import React, {
    useState,
    useEffect,
} from 'react';

import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledDropdown,
    StyledDropdownSelected,
    StyledDropdownList,
    StyledFilterable,
} from './styled';

import Textline from '../Textline';

import {
    PluridDropdownSelectable,
} from '../../../data/interfaces';



interface DropdownProperties {
    selectables: (PluridDropdownSelectable | string)[];
    selected: PluridDropdownSelectable | string;
    atSelect: (selection: PluridDropdownSelectable | string, kind?: string) => void;

    left?: boolean;
    kind?: string;
    dropdownToggled?: boolean;
    setDropdownToggled?: any;
    /**
     * Hide dropdown after click selection.
     *
     * Default `true`.
     */
    hideAtSelect?: boolean;
    /**
     * Run the `atSelect` function when hovering over a dropdown item.
     *
     * Default `true`.
     */
    selectAtHover?: boolean;
    selectedColor?: string;

    /**
     * Inserts an input field to filter the selectables.
     */
    filterable?: boolean;

    theme?: Theme;
    level?: number;
    devisible?: boolean;
    round?: boolean;
    width?: string | number;

    /**
     * The number of items determining the height;
     */
    heightItems?: number;
}

const Dropdown: React.FC<DropdownProperties> = (properties) => {
    const {
        selected,
        selectables,
        atSelect,

        left,
        kind,
        dropdownToggled,
        setDropdownToggled,
        hideAtSelect,
        selectAtHover,
        selectedColor,
        filterable,

        theme,
        level,

        heightItems,
        width,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _hideAtSelect = hideAtSelect === undefined
        ? true
        : hideAtSelect;

    const _selectAtHover = selectAtHover === undefined
        ? true
        : selectAtHover;

    const [showList, setShowList] = useState(false);
    const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(_theme.backgroundColorTertiary);
    const [filterValue, setFilterValue] = useState('');
    const [filteredSelectables, setFilteredSelectables] = useState([...selectables]);

    const select = (
        selected: string | PluridDropdownSelectable,
    ) => {
        kind
            ? atSelect(selected, kind)
            : atSelect(selected);
    }

    const handleSelect = (
        selected: string | PluridDropdownSelectable,
    ) => {
        select(selected);
        _hideAtSelect ? setShowList(false) : null;
    }

    const handleHover = (
        selected: string | PluridDropdownSelectable,
    ) => {
        if (_selectAtHover) {
            select(selected);
        }
    }

    const handleFiltering = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const {
            value,
        } = event.target;

        const filteredSelectables = selectables.filter(selectable => {
            if (typeof selectable === 'string') {
                if (selectable.toLowerCase().startsWith(value.toLowerCase())) {
                    return true;
                }
                return false;
            }

            if (selectable.value.toLowerCase().startsWith(value.toLowerCase())) {
                return true;
            }

            return false;
        });

        setFilterValue(value);
        setFilteredSelectables(filteredSelectables);
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
                theme={_theme}
                selectedColor={selectedColor}
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
                    heightItems={heightItems && filterable && filteredSelectables.length < heightItems
                        ? filteredSelectables.length + 1
                        : heightItems
                    }
                    width={width}
                >
                    <ul>
                        {filterable && (
                            <li
                                style={{
                                    backgroundColor: _theme.backgroundColorDark,
                                }}
                            >
                                <StyledFilterable
                                    left={left}
                                >
                                    <Textline
                                        theme={_theme}
                                        text={filterValue}
                                        atChange={handleFiltering}
                                        devisible={true}
                                    />
                                </StyledFilterable>
                            </li>
                        )}

                        {filteredSelectables.map((selectable) => {
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
                                    onMouseEnter={() => handleHover(selectable)}
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
