import Article from '../../components/article';
import parse from '../parse';
import en from './index.md';
import ja from './index.ja.md';
import shader from './index.frag';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article path="/vedajs"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
    shader={{
      attach(veda) {
        veda.loadFragmentShader(shader);
      },
      detach() {},
    }}/>
));
