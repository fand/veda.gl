import React from 'react';
import Helmet from 'react-helmet';
import constants from './constants';
import sanitize from 'sanitize.css';
import openSans from './open-sans.css';
import hljs from 'highlight.js/styles/atom-one-dark.css';

export default ({ url, title, image, description, siteName, lang }) => (
  <div>
    <Helmet>
      <html lang={lang || 'en'}/>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>{title}</title>
      <meta name="Description" content={description}/>

      {/* Facebook */}
      <meta property="og:url" content={url}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:image" content={image}/>
      <meta property="og:description" content={description}/>
      <meta property="og:site_name" content={siteName}/>
      <meta property="og:locale" content="en_US"/>

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@amagitakayosi"/>
      <meta name="twitter:creator" content="@amagitakayosi"/>
      <meta name="twitter:url" content={url}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>

      {/* Google+ / Schema.org */}
      <meta itemProp="name" content={title}/>
      <meta itemProp="description" content={title}/>
      <meta itemProp="image" content={image}/>

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/static/favicons/manifest.json"/>
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    <script async src="https://platform.twitter.com/widgets.js"/>
    <style global jsx>{`
      ${sanitize}
      ${openSans}
      ${hljs}
      body {
        margin: 0;
        padding: 0;
        background: ${constants.bg};
        color: ${constants.fg};
        font-size: 16px;
        line-height: 1.8em;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-display: swap;
        text-rendering: auto;
        text-shadow: 0 0 2px black;
        -webkit-font-smoothing: antialiased;
      }
      pre {
        padding: 10px;
        background: #000;
        font-family: monospace;
        overflow: scroll;
      }
      article img {
        max-width: 100%;
      }
      a, a:visited, a:hover {
        color: ${constants.link};
        font-weight: normal;
      }
      ul {
        padding-left: 20px;
      }
      a:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      h1 {
        font-weight: 100;
        line-height: 1.6em;
      }
      h2, h3, h4, h5, h6 {
        font-weight: 400;
        line-height: 2em;
        margin: 2em 0 0em;
      }
      h2 { font-size: 1.5em; }
      h3 { font-size: 1.4em; }
      h4 { font-size: 1.3em; }
      h5 { font-size: 1.2em; }
      h5 { font-size: 1.2em; }
      p {
        margin: 1em 0;
      }
      .veda-video-source {
        z-index: -999;
        pointer-events: none;
        position: fixed;
        top:100%;
      }
      hr {
        width: 60%;
        height: 1px !important;
        background: ${constants.fg};
        border: none;
        margin: 50px auto;
      }
      code {
        padding: 2px 4px;
        background: black;
        font-family: Courier, monospace !important;
      }
      .pc-only {
        font-style: italic;
      }
      .pc-only button {
        cursor: pointer;
      }
      @media (mac-width: ${constants.mobile}px) {
        .pc-only {
          display: none;
        }
      }
    `}
    </style>
  </div>
);
