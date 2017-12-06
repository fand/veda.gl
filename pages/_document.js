import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();
    return { ...documentProps, helmet: Helmet.renderStatic(), styleTags };
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent());
  }

  get helmetJsx() {
    return (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="VEDA.js - Shader Art Framework"
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { property: 'og:title', content: 'VEDA.js - Shader Art Framework' },
        ]}
      />
    );
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
          {this.props.styleTags}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}
