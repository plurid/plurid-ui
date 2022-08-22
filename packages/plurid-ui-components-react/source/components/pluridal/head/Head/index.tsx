// #region imports
    // #region libraries
    import React from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';


    import {
        StateOfAny,
        head,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries
// #endregion imports



// #region module
export type HeadState = StateOfAny & {
    head: head.HeadState;
}

export type HeadSelectors = StateOfAny & {
    head: typeof head.selectors;
}

export interface HeadDefaults {
    robots?: string;
    viewport?: string;
    apiDomain?: string;
    canonicalURL?: string;
    ogImageWidth?: string;
    ogImageHeight?: string;
    ogSiteName?: string;
    appleTouchIcon?: string;
}

export interface HeadOwnProperties {
    defaults?: Partial<head.HeadState> & HeadDefaults;
    selectors: HeadSelectors;
    context: React.Context<any>;
    children?: React.ReactNode;
}

export interface HeadStateProperties {
    stateHead: head.HeadState;
}

export interface HeadDispatchProperties {
}

export type HeadProperties =
    & HeadOwnProperties
    & HeadStateProperties
    & HeadDispatchProperties;


const Head: React.FC<HeadProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        defaults,
        children,
        // #endregion own

        // #region state
        stateHead,
        // #endregion state
    } = properties;

    const robots = defaults?.robots || 'index,follow';
    const viewport = defaults?.viewport || 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no';

    const titleValue = stateHead.title || defaults?.title || '';
    const descriptionValue = stateHead.description || defaults?.description || '';
    const canonicalURL = stateHead.canonicalURL ||  defaults?.canonicalURL || '';

    const ogTitleValue = stateHead.ogTitle || titleValue;
    const ogDescriptionValue = stateHead.ogDescription || titleValue;
    const ogImageValue = stateHead.ogImage || defaults?.ogImage || '';
    const ogURLValue = stateHead.ogURL || defaults?.ogURL || '';

    const apiDomain = defaults?.apiDomain || '';

    const ogImageWidth = defaults?.ogImageWidth || '1200';
    const ogImageHeight = defaults?.ogImageHeight || '630';
    const ogSiteName = defaults?.ogSiteName || '';

    const appleTouchIcon = defaults?.appleTouchIcon || '';
    // #endregion properties


    // #region render
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="robots" content={robots} />
            <meta name="viewport" content={viewport} />
            <meta name="description" content={descriptionValue} />

            <title>{titleValue}</title>
            <meta name="title" content={titleValue} />
            <meta name="description" content={descriptionValue} />

            {apiDomain && (
                <>
                    <link rel="preconnect" href={apiDomain} />
                    <link rel="dns-prefetch" href={apiDomain} />
                </>
            )}

            <link rel="icon" href="/favicon.ico" sizes="64x64" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#494f5a" />

            {canonicalURL && (<link rel="canonical" href={canonicalURL} />)}

            {/* OPEN GRAPH */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitleValue} />
            <meta property="og:image" content={ogImageValue} />
            <meta property="og:image:width" content={ogImageWidth} />
            <meta property="og:image:height" content={ogImageHeight} />
            {ogSiteName && (<meta property="og:site_name" content={ogSiteName} />)}
            <meta property="og:url" content={ogURLValue} />
            <meta property="og:description" content={ogDescriptionValue} />

            {/* TWITTER */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogURLValue} />
            <meta property="twitter:title" content={ogTitleValue} />
            <meta property="twitter:description" content={ogDescriptionValue} />
            <meta property="twitter:image" content={ogImageValue} />

            {/* SAFARI */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content={titleValue} />
            {appleTouchIcon && (<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />)}

            {children}
        </>
    );
    // #endregion render
}


const mapStateToProperties =(
    state: HeadState,
    ownProperties: HeadOwnProperties,
): HeadStateProperties => ({
    stateHead: ownProperties.selectors.notifications.getAll(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): HeadDispatchProperties => ({
});


const ConnectedHead = connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Head);
// #endregion module



// #region exports
export default ConnectedHead;
// #endregion exports
