import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './index.md';
import ja from './index.ja.md';

export default connect()(() => (
  <Article
    path="/features"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
