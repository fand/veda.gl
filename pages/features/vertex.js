import React from 'react';
import Article from '../../components/article';
import parse from '../parse';
import en from './vertex.md';
import ja from './vertex.ja.md';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article
    path="/features/vertex"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
