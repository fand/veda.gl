import Article from '../components/article';
import { withReduxSaga } from '../store';
import parse from './parse';
import en from './contributing.md';
import ja from './contributing.ja.md';

export default withReduxSaga(() => (
  <Article path="/contributing"
     article={{
      en: parse(en),
      ja: parse(ja),
    }}/>
));
