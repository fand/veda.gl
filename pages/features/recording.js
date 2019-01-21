import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './recording.md';
import ja from './recording.ja.md';

export default connect()(() => (
  <Article
    path="/features/recording"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
