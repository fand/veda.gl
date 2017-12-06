import React from 'react';
import Article from '../../components/article';
import parse from '../parse';
import en from './osc.md';
import ja from './osc.ja.md';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article
    path="/features/osc"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
