import React from 'react';
import Article from '../components/article';
import parse from './parse';
import en from './install.md';
import ja from './install.ja.md';
import shader from './index.frag';
import { withReduxSaga } from '../store';

export default withReduxSaga(() => (
  <Article
    path="/install"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
    shader={{
      attach(veda) {
        veda.loadFragmentShader(shader);
      },
    }}
  />
));
