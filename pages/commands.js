import React from 'react';
import Article from '../components/article';
import parse from './parse';
import en from './commands.md';
import ja from './commands.ja.md';
import { withReduxSaga } from '../store';

export default withReduxSaga(() => (
  <Article
    path="/commands"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
