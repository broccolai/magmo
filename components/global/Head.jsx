import NextHead from 'next/head'
import React from 'react'

const defaultDescription = ''

export const Head = (props) => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{props.title || ''}</title>

    <meta
      name='description'
      content={props.description || defaultDescription}
    />

    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/static/favicon.ico' />

    <link rel="preload" as="font" type="font/woff2"
      href="/static/fonts/josefin.woff2" crossorigin />

    <link rel="preload" as="font" type="font/woff2"
      href="/static/fonts/nunito.woff2" crossorigin />
  </NextHead>
)

export default Head