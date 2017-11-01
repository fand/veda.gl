import React from 'react';
import styled from 'styled-components';
import colors from './colors';

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0 15px 0 20px;
  z-index: 2;
  .inner {
    position: absolute;
    right: 0;
    top: 100%;
    min-width: 100%;
    transition: 0.3s;
    background: ${colors.syntaxBg};
    height: 0;
    padding: 0 10px;
    overflow: hidden;
    line-height: 1.8em;
    box-shadow: 0 3px 3px black;
    z-index: 1;
  }
  &:hover {
    background: rgba(255,255,255,0.2);
    .inner {
      height: ${p => p.height ? p.height + 'px' : 'auto'};
      ${'' /* height: 200px; */}
    }
  }
  i {
    margin-left: 8px;
  }
`;

export default class DropDown extends React.Component {
  state = {
    open: false,
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return <Wrapper>
      <div>
        {this.props.placeholder}
        <i className="fa fa-angle-down"/>
      </div>
      <div className={`inner ${this.state.open ? 'open' : ''}`}>
        {this.props.children}
      </div>
    </Wrapper>
  }
}
