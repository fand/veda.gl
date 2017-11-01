import Article from '../../components/article';
import parse from '../parse';
import en from './gamepad.md';
import ja from './gamepad.ja.md';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article path="/features/gamepad"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}/>
));
