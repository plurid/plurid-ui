import React, {
    useState,
    useEffect,
} from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconReset,
} from '@plurid/plurid-icons-react';

import {
    StyledDropdown,
    StyledDropdownSelected,
    StyledDropdownList,
    StyledFilterable,
    StyledFilterUpdate,
} from './styled';

import Textline from '../Textline';

import {
    PluridDropdownSelectable,
} from '../../../data/interfaces';



export interface DropdownProperties {
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
    filterUpdate?: () => void;

    style?: React.CSSProperties;
    className?: string;

    theme?: Theme;
    generalTheme?: Theme;
    interactionTheme?: Theme;
    level?: number;
    devisible?: boolean;
    round?: boolean;
    width?: string | number;

    /**
     * The number of items determining the height;
     */
    heightItems?: number;
}

const Dropdown: React.FC<DropdownProperties> = (
    properties,
) => {
    /** properties */
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
        filterUpdate,

        style,
        className,

        theme: themeProperty,
        generalTheme: generalThemeProperty,
        interactionTheme: interactionThemeProperty,
        level,

        heightItems,
        width,
    } = properties;

    const _generalTheme = generalThemeProperty === undefined
        ? themeProperty === undefined
            ? themes.plurid
            : themeProperty
        : generalThemeProperty;

    const _interactionTheme = interactionThemeProperty === undefined
        ? themeProperty === undefined
            ? themes.plurid
            : themeProperty
        : interactionThemeProperty;

    const _level = level === undefined
        ? 0
        : level;

    const _hideAtSelect = hideAtSelect === undefined
        ? true
        : hideAtSelect;

    const _selectAtHover = selectAtHover === undefined
        ? true
        : selectAtHover;


    /** State */
    const [generalTheme, setGeneralTheme] = useState(_generalTheme);
    const [interactionTheme, setInteractionTheme] = useState(_interactionTheme);

    const [showList, setShowList] = useState(false);
    const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(interactionTheme.backgroundColorTertiary);
    const [filterValue, setFilterValue] = useState('');
    const [filteredSelectables, setFilteredSelectables] = useState([...selectables]);


    /** Handlers */
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


    /** effects */
    /** Handle Dropdown */
    useEffect(() => {
        if (!dropdownToggled) {
            setShowList(false);
        }
    }, [dropdownToggled]);

    /** Handle Level */
    useEffect(() => {
        if (_level === 2) {
            setSelectedBackgroundColor(interactionTheme.backgroundColorSecondary);
        } else {
            setSelectedBackgroundColor(interactionTheme.backgroundColorTertiary);
        }
    }, [
        _level,
        interactionTheme,
    ]);

    /** Handle Themes */
    useEffect(() => {
        const generalTheme = generalThemeProperty === undefined
            ? themeProperty === undefined
                ? themes.plurid
                : themeProperty
            : generalThemeProperty;

        const interactionTheme = interactionThemeProperty === undefined
            ? themeProperty === undefined
                ? themes.plurid
                : themeProperty
            : interactionThemeProperty;

        setGeneralTheme(generalTheme);
        setInteractionTheme(interactionTheme);
    }, [
        themeProperty,
        generalThemeProperty,
        interactionThemeProperty,
    ]);

    useEffect(() => {
        setFilteredSelectables(selectables);
    }, [
        selectables,
    ]);


    /** render */
    return (
        <StyledDropdown
            theme={interactionTheme}
            left={left}
            style={{...style}}
            className={className}
        >
            <StyledDropdownSelected
                onClick={() => {
                    setShowList(!showList);

                    if (setDropdownToggled) {
                        setDropdownToggled(kind);
                    }
                }}
                theme={generalTheme}
                selectedColor={selectedColor}
            >
                {typeof selected === 'string'
                    ? selected
                    : selected.value
                }
            </StyledDropdownSelected>

            {showList && (
                <StyledDropdownList
                    theme={interactionTheme}
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
                                    backgroundColor: interactionTheme.backgroundColorTertiary,
                                    boxShadow: interactionTheme.boxShadowPenumbraInset,
                                }}
                            >
                                <StyledFilterable
                                    left={left}
                                >
                                    {filterUpdate && (
                                        <StyledFilterUpdate>
                                            <PluridIconReset />
                                        </StyledFilterUpdate>
                                    )}

                                    <Textline
                                        theme={interactionTheme}
                                        text={filterValue}
                                        atChange={handleFiltering}
                                        devisible={true}
                                        spellCheck={false}
                                        autoCapitalize="false"
                                        autoComplete="false"
                                        autoCorrect="false"
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
