import Article from '../components/article';
import parse from './parse';
import en from './index.md';
import ja from './index.ja.md';
import frag from './index.frag';
import { withReduxSaga } from '../store';

const shader = {
  attach(veda) {
    veda.loadFragmentShader(frag);
  },
  detach(){},
};

const article = {
  en: parse(en),
  ja: parse(ja),
};

export default withReduxSaga(() => (
  <Article shader={shader} article={article}/>
));
