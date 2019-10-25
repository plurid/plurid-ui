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

    kind?: string;
    dropdownToggled?: boolean;
    setDropdownToggled?: any

    theme?: Theme;
}


const Dropdown: React.FC<DropdownProps> = (props) => {
    const [showList, setShowList] = useState(false);

    const {
        selected,
        selectables,
        onSelect,
        kind,
        dropdownToggled,
        setDropdownToggled,

        theme,
    } = props;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    useEffect(() => {
        if (!dropdownToggled) {
            setShowList(false);
        }
    }, [dropdownToggled]);

    return (
        <StyledDropdown>
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
                    theme={theme}
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
                                        backgroundColor: selected === selectableID
                                            ? _theme.backgroundColorTertiary
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
