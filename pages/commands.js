import React from "react";
import { connect } from "react-redux";
import Article from "../components/article";
import parse from "./parse";
import en from "./commands.md";
import ja from "./commands.ja.md";

export default connect()(() => (
  <Article
    path="/commands"
    article={{
      en: parse(en),
      ja: parse(ja)
    }}
  />
));
