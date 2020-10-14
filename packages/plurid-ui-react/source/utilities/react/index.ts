// #region module
/**
 * https://www.davedrinks.coffee/how-do-i-use-two-react-refs/
 *
 * @param refs
 */
const mergeReferences = (
    ...refs: any[]
) => {
    const filteredRefs = refs.filter(Boolean);

    if (!filteredRefs.length) {
        return null;
    }

    if (filteredRefs.length === 1) {
        return filteredRefs[0];
    }

    return (inst: any) => {
        for (const ref of filteredRefs) {
            if (typeof ref === 'function') {
                ref(inst);
            } else if (ref) {
                ref.current = inst;
            }
        }
    };
};
// #endregion module



// #region exports
export {
    mergeReferences,
};
// #endregion exports
