import React from 'react';
import Article from '../components/article';
import parse from './parse';
import en from './settings.md';
import ja from './settings.ja.md';
import { withReduxSaga } from '../store';

export default withReduxSaga(() => (
  <Article
    path="/settings"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
