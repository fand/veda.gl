import React from 'react';
import { connect } from 'react-redux';
import Article from '../components/article';
import parse from './parse';
import en from './settings.md';
import ja from './settings.ja.md';
import { withReduxSaga } from '../store';

export default connect()(() => (
  <Article
    path="/settings"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
