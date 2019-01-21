import React from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import constants from 'constants';
import getVeda from './veda';

import frag from '../pages/index.frag';
const DEFAULT_SHADER = {
  attach(veda) {
    veda.loadFragmentShader(frag);
  },
};

// eslint-disable-next-line
createGlobalStyle`
  body {
    background: black;
  }
`;

class Shader extends React.Component {
  getShader() {
    // Use DEFAULT_SHADER in mobile
    if (window.innerWidth <= constants.mobile) {
      return DEFAULT_SHADER;
    }

    return this.props.shader || DEFAULT_SHADER;
  }

  componentDidMount() {
    const shader = this.getShader();
    setTimeout(() => {
      const veda = getVeda();
      if (shader.attach) {
        shader.attach(veda);
      }

      veda.play();
    }, 0);
  }

  componentWillUnmount() {
    const shader = this.getShader();

    if (shader.detach) {
      const veda = getVeda();
      shader.detach(veda);
    }
  }

  render() {
    return null;
  }
}

export default connect(s => s)(Shader);
