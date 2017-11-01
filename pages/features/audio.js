import Article from '../../components/article';
import parse from '../parse';
import en from './audio.md';
import ja from './audio.ja.md';
import shader from './audio.frag';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article path="/features/audio"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
    shader={{
      attach(veda) {
        window.addEventListener('click', e => {
          console.log(e);
          if (e.target.id === 'enable')  {
            veda.toggleAudio(true);
            veda.loadFragmentShader(shader);
          }
        });
      },
      detach(veda) {
        veda.toggleAudio(false);
      },
    }}/>
));
