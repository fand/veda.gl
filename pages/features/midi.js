import React from "react";
import { connect } from "react-redux";
import Article from "../../components/article";
import parse from "../parse";
import en from "./midi.md";
import ja from "./midi.ja.md";

export default connect()(() => (
  <Article
    path="/features/midi"
    article={{
      en: parse(en),
      ja: parse(ja)
    }}
  />
));
