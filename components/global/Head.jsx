import NextHead from 'next/head';
import React from 'react';

const defaultDescription = '';

export const Head = (props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>

        <meta name="description" content={props.description || defaultDescription} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preload" as="font" type="font/woff2" href="/fonts/josefin.woff2" crossOrigin="true" />

        <link rel="preload" as="font" type="font/woff2" href="/fonts/nunito.woff2" crossOrigin="true" />
    </NextHead>
);

export default Head;
