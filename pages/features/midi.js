import Article from '../../components/article';
import parse from '../parse';
import en from './midi.md';
import ja from './midi.ja.md';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article path="/features/midi"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}/>
));
