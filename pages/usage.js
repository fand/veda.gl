import React from "react";
import { connect } from "react-redux";
import Article from "../components/article";
import parse from "./parse";
import en from "./usage.md";
import ja from "./usage.ja.md";

export default connect()(() => (
  <Article
    path="/usage"
    article={{
      en: parse(en),
      ja: parse(ja)
    }}
  />
));
