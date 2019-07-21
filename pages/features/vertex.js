import React from "react";
import { connect } from "react-redux";
import Article from "../../components/article";
import parse from "../parse";
import en from "./vertex.md";
import ja from "./vertex.ja.md";

export default connect()(() => (
  <Article
    path="/features/vertex"
    article={{
      en: parse(en),
      ja: parse(ja)
    }}
  />
));
