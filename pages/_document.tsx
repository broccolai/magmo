import Document from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { MagmoContext } from '../typings/Wrappers';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: MagmoContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const AuthUserInfo = ctx.customData?.AuthUserInfo || null;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        AuthUserInfo,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
