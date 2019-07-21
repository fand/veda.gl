import React from "react";
import { connect } from "react-redux";
import Article from "../components/article";
import parse from "./parse";
import en from "./install.md";
import ja from "./install.ja.md";
import shader from "./index.frag";

export default connect()(() => (
  <Article
    path="/install"
    article={{
      en: parse(en),
      ja: parse(ja)
    }}
    shader={{
      attach(veda) {
        veda.loadFragmentShader(shader);
      }
    }}
  />
));
