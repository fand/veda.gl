import React from 'react';
import { connect } from 'react-redux';
import Article from '../../components/article';
import parse from '../parse';
import en from './gamepad.md';
import ja from './gamepad.ja.md';

export default connect()(() => (
  <Article
    path="/features/gamepad"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
  />
));
