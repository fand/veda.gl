(window.webpackJsonp=window.webpackJsonp||[]).push([["d63e"],{"/a9y":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("/HRN")),o=r(n("WaGi")),i=r(n("ZDA2")),u=r(n("/+P4")),l=r(n("N9n2")),s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=s(n("q1tI")),c=s(n("PgRs")),f={400:"Bad Request",404:"This page could not be found",500:"Internal Server Error",501:"Not Implemented"},p=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=f[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:h.error},d.default.createElement(c.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:h.h1},e):null,d.default.createElement("div",{style:h.desc},d.default.createElement("h2",{style:h.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(d.default.Component);p.displayName="ErrorPage",t.default=p;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("/a9y");return{page:e.default||e}}])},"4hZ1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("q1tI"),a="undefined"==typeof window;t.default=function(){function e(e){n=e.props.reduceComponentsToState([...t],e.props),e.props.handleStateChange&&e.props.handleStateChange(n)}const t=new Set;let n;return class extends r.Component{static rewind(){const e=n;return n=void 0,t.clear(),e}constructor(n){super(n),a&&(t.add(this),e(this))}componentDidMount(){t.add(this),e(this)}componentDidUpdate(){e(this)}componentWillUnmount(){t.delete(this),e(this)}render(){return null}}}},IClC:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},PgRs:function(e,t,n){e.exports=n("m/Pd")},Wziy:function(e,t,n){"use strict";function r({enabled:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e&&(!t||t&&n)}var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n("q1tI")),i=n("imt6");t.isAmp=r,t.useAmp=function(){return r(o.default.useContext(i.AmpModeContext))},t.withAmp=function(e,{hybrid:t=!1}={}){function n(n={}){const r=o.default.useContext(i.AmpModeContext);return r.enabled=!0,r.hybrid=t,o.default.createElement(e,n)}return n.__nextAmpOnly=!t,n.getInitialProps=e.getInitialProps,n}},imt6:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n("q1tI"));t.AmpModeContext=a.createContext({})},"m/Pd":function(e,t,n){"use strict";function r(e="next-head",t=!1){const n=[l.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(l.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function a(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}function o(e,t){return e.reduce((e,t)=>{const n=l.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(a,[]).reverse().concat(r("",t.isAmp)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return a=>{if(a.key&&"number"!=typeof a.key&&0===a.key.indexOf(".$"))return!e.has(a.key)&&(e.add(a.key),!0);switch(a.type){case"title":case"base":if(t.has(a.type))return!1;t.add(a.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(a.props.hasOwnProperty(t))if("charSet"===t||"viewport"===t){if(n.has(t))return!1;n.add(t)}else{const e=a.props[t],n=r[t]||new Set;if(n.has(e))return!1;n.add(e),r[t]=n}}}return!0}}()).reverse().map((e,t)=>{const n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return l.default.cloneElement(e,{key:r,className:n})})}function i({children:e}){return l.default.createElement(d.AmpModeContext.Consumer,null,t=>l.default.createElement(c.HeadManagerContext.Consumer,null,n=>l.default.createElement(h,{reduceComponentsToState:o,handleStateChange:n,isAmp:f.isAmp(t)},e)))}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=u(n("q1tI")),s=u(n("4hZ1")),d=n("imt6"),c=n("IClC"),f=n("Wziy");t.defaultHead=r;const p=["name","httpEquiv","charSet","viewport","itemProp"],h=s.default();i.rewind=h.rewind,t.default=i}},[["04ac","5d41","9da1"]]]);