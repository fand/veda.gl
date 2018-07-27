import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './server.md';
import ja from './server.ja.md';

export default connect()(() => (
  <Article
    path="/features/server"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
