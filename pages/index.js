import React from "react";
import { connect } from "react-redux";
import Article from "../components/article";
import parse from "./parse";
import en from "./index.md";
import ja from "./index.ja.md";
import frag from "./index.frag";

const shader = {
  attach(veda) {
    veda.loadFragmentShader(frag);
  }
};

const article = {
  en: parse(en),
  ja: parse(ja)
};

export default connect()(() => <Article shader={shader} article={article} />);
