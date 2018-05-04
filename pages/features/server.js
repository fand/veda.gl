import React from 'react';
import Article from '../../components/article';
import parse from '../parse';
import en from './server.md';
import ja from './server.ja.md';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article
    path="/features/server"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
