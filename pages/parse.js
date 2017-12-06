import marked from 'marked';
import frontmatter from 'frontmatter';

import hljs from 'highlight.js/lib/highlight';
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('glsl', require('highlight.js/lib/languages/glsl'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  highlight: code => {
    return hljs.highlightAuto(code).value;
  },
});

export default function parse(_md) {
  const { data, content } = frontmatter(_md);
  const md = content.trim();
  return {
    ...data,
    content,
    html: marked(md),
  };
}
