export default {
  fg: '#FFFFFF',
  bg: '#282c34',
  link: '#88eeff',
  mobile: 767,
  pc: 768,
  og: {
    title: 'VEDA - VJ app for Atom #VEDAJS #GLSL',
    description: `
  VEDA is a GLSL runtime environment for Atom.
  It's just like GLSL sandbox or Shadertoy, but you can use autocomplete and linter by using existing Atom packages.
  Moreover, It supports Audio inputs , MIDI inputs, loading videos and images, etc...!!!!
    `.trim(),
    image: '/static/images/logo_720h.png',
  },
  ga: `
!function(v,e,d,a,g,l){v.GoogleAnalyticsObject=d;v[d]||(v[d]=function(){
(v[d].q=v[d].q||[]).push(arguments)});v[d].l=+new Date;g=e.createElement(a);
l=e.getElementsByTagName(a)[0];g.src='https://www.google-analytics.com/analytics.js';
l.parentNode.insertBefore(g,l)}(window,document,'ga','script');

ga('create', 'UA-41787635-14', 'auto');
ga('send', 'pageview');
  `.trim(),
};
