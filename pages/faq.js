import Article from '../components/article';
import { withReduxSaga } from '../store';
import parse from './parse';
import en from './faq.md';
import ja from './faq.ja.md';

export default withReduxSaga(() => (
  <Article path="/faq"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}/>
));
