import React from 'react';
import { connect } from 'react-redux';
import { hideMenu, showHeader, hideHeader, setLanguage } from '../actions';
import Link from 'next/link';
import { throttle } from 'lodash';
import styled from 'styled-components';
import constants from './constants';
import Sidebar from './sidebar';
import Header from './header';
import Meta from './meta';
import Shader from './shader';

const DEFAULT = {
  title: `VEDA - VJ system on Atom #VEDAJS #GLSL`,
  description: `
VEDA is a GLSL runtime environment for Atom.
It's just like GLSL sandbox or Shadertoy, but you can use autocomplete and linter by using existing Atom packages.
Moreover, It supports Audio inputs , MIDI inputs, loading videos and images, etc...!!!!
  `.trim(),
  image: '/static/images/logo_720h.png',
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: visible;
  display: flex;

  transition: left 0.3s;
  @media (max-width: ${constants.mobile}px) {
    width: auto;
    left: -82vw;
    &.menu {
      left: 0;
    }
  }
`;
const SidebarWrapper = styled.div`
  width: 270px;
  -webkit-overflow-scrolling: touch;
  @media (max-width: ${constants.mobile}px) {
    width: 82vw;
  }
`
const BodyColumn = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: ${constants.mobile}px) {
    width: 100vw;
  }
`;

const MainWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`

class Layout extends React.Component {
  static getInitialProps = async ({ pathname }) => ({
    path: pathname,
  });

  componentDidMount() {
    this.body.addEventListener('scroll', this.watchScroll);
    this.watchScroll();
    this.props.dispatch(hideMenu());
  }

  componentWillUnmount() {
    this.body.removeEventListener('scroll', this.watchScroll);
  }

  watchScroll = throttle(() => {
    this.props.dispatch(this.body.scrollTop > 100 ? showHeader() : hideHeader());
  }, 100)

  url() {
    return `https://veda.gl${this.props.path}`;
  }

  siteName() {
    return DEFAULT.title;
  }

  title() {
    return this.props.article.title || DEFAULT.title;
  }

  description() {
    return this.props.article.description || DEFAULT.description;
  }

  image() {
    return this.props.article.image || DEFAULT.image;
  }

  setBody = el => {
    this.body = el;
  }

  render() {
    const sc = this.props.isMenuVisible ? 'menu' : '';
    const article = this.props.article[this.props.lang] || this.props.article.en;
    const title = (article.title ? article.title + ' | ' : '') + DEFAULT.title;
    return (
      <div>
        <Meta
          url={this.url()}
          title={title}
          image={DEFAULT.image}
          description={DEFAULT.description}
          siteName={DEFAULT.title}/>
        <Wrapper className={sc}>
          <SidebarWrapper className={sc}>
            <Sidebar path={this.props.path}/>
          </SidebarWrapper>
          <BodyColumn>
            <HeaderWrapper>
              <Header path={this.props.path} i18n={!!this.props.article.ja} url={this.url()} title={title}/>
            </HeaderWrapper>
            <MainWrapper className="body" innerRef={this.setBody}>
              {this.props.children}
            </MainWrapper>
          </BodyColumn>
        </Wrapper>
        <Shader shader={this.props.shader}/>
      </div>
    );
  }
}

export default connect(s => s)(Layout);
