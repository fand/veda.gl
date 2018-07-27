import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './audio.md';
import ja from './audio.ja.md';
import defaultShader from './index.frag';
import audioShader from './audio.frag';

export default connect()(() => (
  <Article
    path="/features/audio"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
    shader={{
      attach(veda) {
        veda.loadFragmentShader(defaultShader);
        window.addEventListener('click', e => {
          if (e.target.id === 'enable') {
            veda.toggleAudio(true);
            veda.loadFragmentShader(audioShader);
          }
        });
      },
      detach(veda) {
        veda.toggleAudio(false);
      },
    }}
  />
));
