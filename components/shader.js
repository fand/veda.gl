import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { throttle } from 'lodash';
import constants from 'constants';

import frag from './shader.frag';
const DEFAULT_SHADER = {
  attach(veda) {
    veda.loadFragmentShader(frag);
  }
};

const CanvasWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: black;
`;

const Canvas = styled.canvas`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.5;
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
      const Veda = require('vedajs');
      this.veda = new Veda({
        pixelRatio: 5,
        frameskip: 5,
      });
      this.veda.setCanvas(this.canvas);
      shader.attach && shader.attach(this.veda);
      this.veda.play();
      window.addEventListener('resize', this.resize);
    }, 0);
  }

  componentWillUnmount() {
    const shader = this.getShader();
    this.veda.stop();
    shader.detach && shader.detach(this.veda);
    window.removeEventListener('resize', this.resize);
  }

  resize = throttle(() => {
    this.veda.resize(this.container.offsetWidth, this.container.offsetHeight);
  })

  setContainer = el => {
    this.container = el;
  }

  setCanvas = el => {
    this.canvas = el;
  }

  render() {
    return (
      <CanvasWrapper innerRef={this.setContainer}>
        <Canvas innerRef={this.setCanvas}/>
      </CanvasWrapper>
    );
  }
}

export default connect(s => s)(Shader);
