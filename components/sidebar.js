import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import LazyLoad from "react-lazyload";
import constants from "./constants";
import { connect } from "react-redux";
import { hideMenu } from "../actions";

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 10px 20px 100px;
  background: rgba(10, 10, 10, 0.6);
  border-right: 1px solid rgb(24, 26, 31);
  text-shadow: 0 2px 5px black;
  overflow: auto;
  * {
    font-weight: 400;
  }
  h4 {
    margin: 1em 0 0;
    font-weight: 700;
  }
  ul {
    padding-left: 0;
    margin: 0;
  }
  li {
    display: block;
    width: 100%;
    line-height: 2.5em;
    &.active {
      box-shadow: -200px 0 0 black, 200px 0 0 black;
      background: black;
      * {
        font-weight: 700;
      }
    }
  }
  li a {
    display: block;
    text-decoration: none;
    color: ${constants.fg};
    &:hover {
      color: ${constants.link};
      text-decoration: underline;
    }
    &:visited {
      color: ${constants.fg};
    }
  }
`;

const Header = styled.div`
  margin-bottom: 30px;
  .logo {
    width: 100%;
    padding: 5px 10px;
    margin-left: -10px;
    a {
      display: block;
    }
  }
  .banners {
    width: 180px;
    margin: 20px auto;
    transform: translateX(-5px);
    display: flex;
    justify-content: space-between;
    img {
      height: 20px;
    }
  }
`;

const isActive = (path, to) => {
  const pathname = (to || "").match(/^([^#?]*)\??([^#]*)#?(.*)$/)[1];
  return path === pathname;
};

class Sidebar extends React.PureComponent {
  hideMenu = () => this.props.dispatch(hideMenu());

  prefetch = to => () => Router.prefetch(to);

  Li = ({ to, children }) => {
    const { path } = this.props;
    if (isActive(path, to)) {
      return (
        <li className="active" onClick={this.hideMenu}>
          {children}
        </li>
      );
    }

    return (
      <li onClick={this.hideMenu} onMouseOver={this.prefetch(to)}>
        <Link href={to}>
          <a>{children}</a>
        </Link>
      </li>
    );
  };

  render() {
    const { lang } = this.props;
    const Li = this.Li;

    return (
      <Nav>
        <Header>
          <Link href={lang === "en" ? "/" : `/?lang=${lang}`}>
            <a>
              <img
                className="logo"
                src="/static/images/logo_header.png"
                alt="VEDA Header"
              />
            </a>
          </Link>
          <div className="banners">
            <a
              className="github"
              target="\_blank"
              href="https://github.com/fand/veda"
            >
              <LazyLoad
                once
                placeholder={
                  <img
                    alt="GitHub Stars"
                    src="/static/images/shield_dummy.png"
                  />
                }
              >
                <img
                  alt="GitHub Stars"
                  src="https://img.shields.io/github/stars/fand/veda.svg?style=social&maxAge=259200"
                />
              </LazyLoad>
            </a>
            <a
              className="twitter"
              target="\_blank"
              href="https://twitter.com/search?f=tweets&q=%23vedajs&src=typd"
            >
              <img alt="hashtag #vedajs" src="/static/images/hashtag.png" />
            </a>
          </div>
        </Header>

        {lang === "en" && (
          <ul>
            <li>VEDA for Atom</li>
            <li>
              <ul style={{ textIndent: "20px" }}>
                <Li to="/install">Install</Li>
                <Li to="/usage">Usage</Li>
                <Li to="/commands">Commands</Li>
                <Li to="/settings">Settings</Li>
                <Li to="/features">Features</Li>
                <ul style={{ textIndent: "40px" }}>
                  <Li to="/features/fragment">Fragment Shaders</Li>
                  <Li to="/features/vertex">Vertex Shaders</Li>
                  <Li to="/features/image">Images & Videos</Li>
                  <Li to="/features/audio">Audio</Li>
                  <Li to="/features/midi">MIDI</Li>
                  <Li to="/features/osc">OSC</Li>
                  <Li to="/features/webcam">WebCam</Li>
                  <Li to="/features/keyboard">Keyboard</Li>
                  <Li to="/features/gamepad">Gamepad</Li>
                  <Li to="/features/server">Server Mode</Li>
                  <Li to="/features/recording">Recording</Li>
                </ul>
              </ul>
            </li>
            <Li to="/vedajs">VEDA.js</Li>
            <Li to="/faq">FAQ</Li>
            <Li to="/contributing">CONTRIBUTING</Li>
          </ul>
        )}
        {lang === "ja" && (
          <ul>
            <li>VEDA for Atom</li>
            <li>
              <ul style={{ textIndent: "20px" }}>
                <Li to="/install?lang=ja">インストール</Li>
                <Li to="/usage?lang=ja">操作方法</Li>
                <Li to="/commands?lang=ja">コマンド</Li>
                <Li to="/settings?lang=ja">設定</Li>
                <Li to="/features?lang=ja">機能一覧</Li>
                <ul style={{ textIndent: "40px" }}>
                  <Li to="/features/fragment?lang=ja">
                    フラグメントシェーダー
                  </Li>
                  <Li to="/features/vertex?lang=ja">頂点シェーダー</Li>
                  <Li to="/features/image?lang=ja">画像/動画</Li>
                  <Li to="/features/audio?lang=ja">音声入力</Li>
                  <Li to="/features/midi?lang=ja">MIDI入力</Li>
                  <Li to="/features/osc?lang=ja">OSC</Li>
                  <Li to="/features/webcam?lang=ja">Webカメラ</Li>
                  <Li to="/features/keyboard?lang=ja">キーボード</Li>
                  <Li to="/features/gamepad?lang=ja">ゲームパッド</Li>
                  <Li to="/features/server?lang=ja">サーバーモード</Li>
                  <Li to="/features/recording?lang=ja">レコーディング</Li>
                </ul>
              </ul>
            </li>
            <Li to="/vedajs?lang=ja">VEDA.js</Li>
            <Li to="/faq?lang=ja">FAQ</Li>
            <Li to="/contributing?lang=ja">CONTRIBUTING</Li>
          </ul>
        )}
      </Nav>
    );
  }
}

Sidebar.propTypes = {
  lang: PropTypes.string,
  path: PropTypes.string,
  dispatch: PropTypes.any
};

export default connect(s => s)(Sidebar);
