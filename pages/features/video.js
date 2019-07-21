import React from "react";
import { connect } from "react-redux";
import Article from "../../components/article";
import parse from "../parse";
import md from "./video.md";
import shader from "./video.frag";

export default connect()(() => (
  <Article
    path="/features/video"
    article={{
      en: parse(md)
    }}
    shader={{
      attach(veda) {
        veda.loadTexture("video1", "/static/videos/1.mp4");
        veda.loadTexture("video2", "/static/videos/2.mp4");
        veda.loadTexture("video3", "/static/videos/3.mp4");
        veda.loadFragmentShader(shader);
      },
      detach(veda) {
        veda.unloadTexture("video1", "/static/videos/1.mp4");
        veda.unloadTexture("video2", "/static/videos/2.mp4");
        veda.unloadTexture("video3", "/static/videos/3.mp4");
      }
    }}
  />
));
