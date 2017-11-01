import Article from '../../components/article';
import parse from '../parse';
import en from './webcam.md';
import ja from './webcam.ja.md';
import shader from './webcam.frag';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article path="/features/webcam"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
    shader={{
      attach(veda) {
        window.addEventListener('click', e => {
          console.log(e);
          if (e.target.id === 'enable')  {
            veda.setPixelRatio(4);
            veda.toggleCamera(true);
            veda.loadFragmentShader(shader);
          }
        });
      },
      detach(veda) {
        veda.toggleCamera(false);
      },
    }}/>
));
