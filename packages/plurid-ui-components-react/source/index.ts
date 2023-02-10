// #region imports
    // #region internal
    import universal from '~components/universal';
    import pluridal from '~components/pluridal';
    // #endregion internal
// #endregion imports



// #region exports
export * from './data/interfaces';

export default {
    ...universal.buttons,
    ...universal.form,
    ...universal.general,
    ...universal.inputs,
    ...universal.markers,
    ...universal.typography,
    ...universal.varia,

    ...pluridal.containers,
    ...pluridal.head,
    ...pluridal.notifications,
    ...pluridal.sitting,
    ...pluridal.toolbars,
};

const {
    buttons: {
        LinkButton,
        PureButton,
        RefreshButton,
    },
    form: {
        FormLeftRight,
        FormObliterate,
        Formbutton,
        Formitem,
        Formline,
    },
    general: {
        GlobalStyles,
    },
    inputs: {
        Dropdown,
        EntityPill,
        EntityPillGroup,
        InputBox,
        InputDescriptor,
        InputLine,
        InputSwitch,
        Itemsline,
        Select,
        Slider,
        Switch,
        Textline,
    },
    markers: {
        HR,
        ProgressCircle,
        Spinner,
        Tooltip,
    },
    typography: {
        Heading,
        Paragraph,
    },
    varia: {
        CopyableLine,
        NewPageLink,
        ScrollableLine,
        TextItem,
    },
} = universal;

export {
    universal,
    pluridal,

    LinkButton,
    PureButton,
    RefreshButton,

    FormLeftRight,
    FormObliterate,
    Formbutton,
    Formitem,
    Formline,

    GlobalStyles,

    Dropdown,
    EntityPill,
    EntityPillGroup,
    InputBox,
    InputDescriptor,
    InputLine,
    InputSwitch,
    Itemsline,
    Select,
    Slider,
    Switch,
    Textline,

    HR,
    ProgressCircle,
    Spinner,
    Tooltip,

    Heading,
    Paragraph,

    CopyableLine,
    NewPageLink,
    ScrollableLine,
    TextItem,
};
// #endregion exports
