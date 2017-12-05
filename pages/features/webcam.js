import Article from '../../components/article';
import parse from '../parse';
import en from './webcam.md';
import ja from './webcam.ja.md';
import defaultShader from './index.frag';
import webcamShader from './webcam.frag';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article path="/features/webcam"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}
    shader={{
      attach(veda) {
        veda.loadFragmentShader(defaultShader);
        window.addEventListener('click', e => {
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
