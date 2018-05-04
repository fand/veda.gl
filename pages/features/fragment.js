import React from 'react';
import Article from '../../components/article';
import parse from '../parse';
import en from './fragment.md';
import ja from './fragment.ja.md';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article
    path="/features/fragment"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
