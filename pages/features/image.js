import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './image.md';
import ja from './image.ja.md';
import frag from './image.frag';

export default connect()(() => (
  <Article
    path="/features/image"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
    shader={{
      attach(veda) {
        veda.loadTexture('image1', '/static/images/1.jpg');
        veda.loadTexture('image2', '/static/images/2.jpg');
        veda.loadFragmentShader(frag);
      },
      detach(veda) {
        veda.unloadTexture('image1', '/static/images/1.jpg');
        veda.unloadTexture('image2', '/static/images/2.jpg');
      },
    }}
  />
));
