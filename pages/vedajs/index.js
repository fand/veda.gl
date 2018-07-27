import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './index.md';
import ja from './index.ja.md';
import shader from './index.frag';

export default connect()(() => (
  <Article
    path="/vedajs"
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
