import React from 'react';
import Layout from './layout';
import { connect } from 'react-redux';

const Article = (props) => (
  <Layout {...props}>
    <article dangerouslySetInnerHTML={{ __html: (props.article[props.lang] || props.article.en).html }}/>
    <style jsx>{`
      article {
        width: 90%;
        max-width: 680px;
        margin: 20px auto 120px;
        padding: 0;
        overflow: hidden;
      }
      @media (max-width: 767px) {
        article {
          margin-top: 60px;
        }
      }
    `}</style>
  </Layout>
);

export default connect(s => s)(Article);
