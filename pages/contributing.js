import React from 'react';
import { connect } from 'react-redux';
import Article from '../components/article';
import parse from './parse';
import en from './contributing.md';
import ja from './contributing.ja.md';

export default connect()(() => (
  <Article
    path="/contributing"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
