import Article from '../components/article';
import parse from './parse';
import en from './usage.md';
import ja from './usage.ja.md';
import { withReduxSaga } from '../store';

export default withReduxSaga(() => (
  <Article path="/usage"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}/>
));
