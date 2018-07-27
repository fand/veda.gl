import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './fragment.md';
import ja from './fragment.ja.md';
import { withReduxSaga } from '../../store';

export default connect()(() => (
  <Article
    path="/features/fragment"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
