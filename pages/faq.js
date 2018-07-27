import React from 'react';
import { connect } from 'react-redux';
import Article from '../components/article';
import parse from './parse';
import en from './faq.md';
import ja from './faq.ja.md';

export default connect()(() => (
  <Article
    path="/faq"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
