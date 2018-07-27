import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './osc.md';
import ja from './osc.ja.md';

export default connect()(() => (
  <Article
    path="/features/osc"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
