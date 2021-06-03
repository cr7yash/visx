_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[95],{"+wNj":function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return o}))},"201w":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("J4UP");function r(e){return Object(o.a)(e)}},"5QLo":function(e,n,t){"use strict";t.r(n);var o=t("ERkP"),r=t.n(o),i=t("cxan"),a=t("HbGN"),l=t("O94r"),u=t.n(l),s=r.a.createElement;function c(e){var n=e.polygon,t=e.className,o=e.children,l=Object(a.a)(e,["polygon","className","children"]);if(!n)return null;var c="M".concat(n.join("L"),"Z");return o?s(r.a.Fragment,null,o({path:c,polygon:n})):s("path",Object(i.a)({className:u()("visx-voronoi-polygon",t),d:c},l))}try{c.displayName="VoronoiPolygon",c.__docgenInfo={description:"",displayName:"VoronoiPolygon",props:{children:{defaultValue:null,description:"Override render function which is provided polygon and generated path.",name:"children",required:!1,type:{name:"(({ path, polygon }: { path: string; polygon: [number, number][]; }) => ReactNode) | undefined"}},className:{defaultValue:null,description:"className to apply to path element.",name:"className",required:!1,type:{name:"string | undefined"}},polygon:{defaultValue:null,description:"Array of coordinate arrays for the polygon (e.g., [[x,y], [x1,y1], ...]), used to generate polygon path.",name:"polygon",required:!1,type:{name:"[number, number][] | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-voronoi/src/components/VoronoiPolygon.tsx#VoronoiPolygon"]={docgenInfo:c.__docgenInfo,name:"VoronoiPolygon",path:"../visx-voronoi/src/components/VoronoiPolygon.tsx#VoronoiPolygon"})}catch(g){}var d=t("/QfC");function f(e){var n=e.width,t=void 0===n?0:n,o=e.height,r=void 0===o?0:o,i=e.x,a=e.y,l=Object(d.a)();return i&&l.x(i),a&&l.y(a),l.extent([[-1,-1],[t+1,r+1]]),l}try{f.displayName="voronoi",f.__docgenInfo={description:"Returns a configured d3 voronoi `layout`. calling `layout(data)` returns a voronoi *diagram*.\nAlternatively call `layout.polygons(data)`, `layout.triangles(data)`, `layout.links(data)`",displayName:"voronoi",props:{width:{defaultValue:{value:0},description:"The total width of the voronoi layout.",name:"width",required:!1,type:{name:"number | undefined"}},height:{defaultValue:{value:0},description:"The total width of the voronoi layout.",name:"height",required:!1,type:{name:"number | undefined"}},x:{defaultValue:null,description:"Set the x-value accessor function for the voronoi layout.",name:"x",required:!1,type:{name:"((d: Datum) => number) | undefined"}},y:{defaultValue:null,description:"Set the y-value accessor function for the voronoi layout.",name:"y",required:!1,type:{name:"((d: Datum) => number) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-voronoi/src/voronoi.ts#voronoi"]={docgenInfo:f.__docgenInfo,name:"voronoi",path:"../visx-voronoi/src/voronoi.ts#voronoi"})}catch(g){}var p=t("QnPE"),v=t("IxWj"),y=r.a.createElement,m=[f,c],h=[v.default];n.default=function(){return y(p.a,{components:m,examples:h,readme:'# @visx/voronoi\n\n<a title="@visx/voronoi npm downloads" href="https://www.npmjs.com/package/@visx/voronoi">\n  <img src="https://img.shields.io/npm/dm/@visx/voronoi.svg?style=flat-square" />\n</a>\n\n## Overview\n\nA Voronoi diagram partitions a two-dimensional plane into regions based on a set of input points.\nEach unique input point maps to a corresponding region, where each region represents _all points\nthat are closer to the input point than to any other input point_.\n\nNot only are Voronoi diagrams \ud83d\ude0d, but they can be used to\n[improve the interactive experience of a visualization](https://www.visualcinnamon.com/2015/07/voronoi.html).\nThis is most often accomplished by overlaying an invisible voronoi grid on top of the visualization\nto increase the target area of interaction sites such as points on a scatter plot.\n\nThe `@visx/voronoi` package provides a wrapper around the existing\n[d3-voronoi](https://github.com/d3/d3-voronoi) package with some `react`-specific utilities.\n\n## Installation\n\n```\nnpm install --save @visx/voronoi\n```\n\n## Usage\n\nThe `@visx/voronoi` package exports a wrapped version of the d3 `voronoi` layout for flexible usage,\nas well as a `<VoronoiPolygon />` component for rendering Voronoi regions.\n\n```js\nimport { voronoi, VoronoiPolygon } from \'@visx/voronoi\';\n\nconst points = Array(n).fill(null).map(() => ({\n  x: Math.random() * innerWidth,\n  y: Math.random() * innerHeight,\n}));\n\n// width + height set an extent on the voronoi\n// x + y set relevant accessors depending on the shape of your data\nconst voronoiLayout = voronoi({\n  x: d => d.x,\n  y: d => d.y,\n  width,\n  height,\n});\n\nconst voronoiDiagram = voronoiLayout(data);\nconst polygons = voronoiDiagram.polygons(); // equivalent to voronoiLayout.polygons(points)\n\nreturn (\n  <svg>\n    <Group>\n      {polygons.map((polygon) => (\n        <VoronoiPolygon key={...} polygon={polygon} />\n      ))}\n      {points.map(({ x, y }) => (\n        <circle key={...} cx={x} cy={y} />\n      )}\n    </Group>\n  </svg>\n)\n```\n\nFor more advanced usage with events, see [this example](https://airbnb.io/visx/voronoi). Additional\ninformation about the voronoi layout + diagram can be found in the\n[d3-voronoi documentation](https://github.com/d3/d3-voronoi).\n',visxPackage:"voronoi"})}},C5Uu:function(e){e.exports=JSON.parse('{"name":"@visx/demo-voronoi","description":"Standalone visx voronoi demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/clip-path":"latest","@visx/event":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/voronoi":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","voronoi"]}')},Dhk8:function(e,n,t){var o=t("Syyo"),r=t("KCLV"),i=t("kHoZ"),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},ENE1:function(e,n,t){var o=t("IBsm");e.exports=function(){return o.Date.now()}},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("+wNj");function r(e,n){if(null==e)return{};var t,r,i=Object(o.a)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},IBsm:function(e,n,t){var o=t("e93E"),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},IacN:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t("aWzz"),r=t.n(o),i=t("ERkP"),a=t.n(i),l=t("hNR5");function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function s(e){var n=e.id,t=e.x,o=void 0===t?0:t,r=e.y,i=void 0===r?0:r,s=e.width,c=void 0===s?1:s,d=e.height,f=void 0===d?1:d,p=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["id","x","y","width","height"]);return a.a.createElement(l.a,{id:n},a.a.createElement("rect",u({x:o,y:i,width:c,height:f},p)))}s.propTypes={id:r.a.string.isRequired,x:r.a.oneOfType([r.a.string,r.a.number]),y:r.a.oneOfType([r.a.string,r.a.number]),width:r.a.oneOfType([r.a.string,r.a.number]),height:r.a.oneOfType([r.a.string,r.a.number])}},IxWj:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var o=t("ERkP"),r=t.n(o),i=t("yPcb"),a=t("i9k6"),l=t("C5Uu");t.d(n,"packageJson",(function(){return l}));var u=r.a.createElement,s={background:"#eb6d88",borderRadius:14,boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 6px"},c={background:"white",color:"#eb6d88",borderRadius:"0 0 14px 14px"};function d(){return u(a.a,{title:"Voronoi overlay",description:"<Voronoi.VoronoiPolygon />",exampleRenderer:i.a,exampleUrl:"/voronoi",tileStyles:s,detailsStyles:c})}},JmwF:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t("aWzz"),r=t.n(o),i=t("ERkP"),a=t.n(i),l=t("O94r"),u=t.n(l);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e){var n=e.top,t=void 0===n?0:n,o=e.left,r=void 0===o?0:o,i=e.transform,l=e.className,c=e.children,d=e.innerRef,f=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["top","left","transform","className","children","innerRef"]);return a.a.createElement("g",s({ref:d,className:u()("visx-group",l),transform:i||"translate("+r+", "+t+")"},f),c)}c.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},KCLV:function(e,n,t){var o=t("Syyo"),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var n=i.call(e,l),t=e[l];try{e[l]=void 0;var o=!0}catch(u){}var r=a.call(e);return o&&(n?e[l]=t:delete e[l]),r}},N6vE:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/voronoi",function(){return t("5QLo")}])},RNvQ:function(e,n,t){var o=t("tQYX"),r=t("ENE1"),i=t("nvU9"),a=Math.max,l=Math.min;e.exports=function(e,n,t){var u,s,c,d,f,p,v=0,y=!1,m=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(n){var t=u,o=s;return u=s=void 0,v=n,d=e.apply(o,t)}function x(e){return v=e,f=setTimeout(O,n),y?g(e):d}function b(e){var t=e-p;return void 0===p||t>=n||t<0||m&&e-v>=c}function O(){var e=r();if(b(e))return w(e);f=setTimeout(O,function(e){var t=n-(e-p);return m?l(t,c-(e-v)):t}(e))}function w(e){return f=void 0,h&&u?g(e):(u=s=void 0,d)}function j(){var e=r(),t=b(e);if(u=arguments,s=this,p=e,t){if(void 0===f)return x(p);if(m)return clearTimeout(f),f=setTimeout(O,n),g(p)}return void 0===f&&(f=setTimeout(O,n)),d}return n=i(n)||0,o(t)&&(y=!!t.leading,c=(m="maxWait"in t)?a(i(t.maxWait)||0,n):c,h="trailing"in t?!!t.trailing:h),j.cancel=function(){void 0!==f&&clearTimeout(f),v=0,u=p=s=f=void 0},j.flush=function(){return void 0===f?d:w(r())},j}},Syyo:function(e,n,t){var o=t("IBsm").Symbol;e.exports=o},a88S:function(e,n,t){var o=t("Dhk8"),r=t("tLQN");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},cxan:function(e,n,t){"use strict";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return o}))},e93E:function(e,n,t){(function(n){var t="object"==typeof n&&n&&n.Object===Object&&n;e.exports=t}).call(this,t("fRV1"))},fRV1:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(o){"object"===typeof window&&(t=window)}e.exports=t},hNR5:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var o=t("aWzz"),r=t.n(o),i=t("ERkP"),a=t.n(i);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e){var n=e.id,t=e.children,o=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["id","children"]);return a.a.createElement("defs",null,a.a.createElement("clipPath",l({id:n},o),t))}u.propTypes={id:r.a.string.isRequired,children:r.a.node}},i6Tx:function(e,n,t){"use strict";n.__esModule=!0,n.default=c;var o=u(t("aWzz")),r=u(t("RNvQ")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l();if(n&&n.has(e))return n.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(t,r,i):t[r]=e[r]}t.default=e,n&&n.set(e,t);return t}(t("ERkP")),a=u(t("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e){var n=e.className,t=e.children,o=e.debounceTime,l=void 0===o?300:o,u=e.ignoreDimensions,c=void 0===u?[]:u,d=e.parentSizeStyles,f=void 0===d?{width:"100%",height:"100%"}:d,p=e.enableDebounceLeadingCall,v=void 0===p||p,y=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),m=(0,i.useRef)(null),h=(0,i.useRef)(0),g=(0,i.useState)({width:0,height:0,top:0,left:0}),x=g[0],b=g[1],O=(0,i.useMemo)((function(){var e=Array.isArray(c)?c:[c];return(0,r.default)((function(n){b((function(t){return Object.keys(t).filter((function(e){return t[e]!==n[e]})).every((function(n){return e.includes(n)}))?t:n}))}),l,{leading:v})}),[l,v,c]);return(0,i.useEffect)((function(){var e=new a.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var n=e.contentRect,t=n.left,o=n.top,r=n.width,i=n.height;h.current=window.requestAnimationFrame((function(){O({width:r,height:i,top:o,left:t})}))}))}));return m.current&&e.observe(m.current),function(){window.cancelAnimationFrame(h.current),e.disconnect(),O&&O.cancel&&O.cancel()}}),[O]),i.default.createElement("div",s({style:f,ref:m,className:n},y),t(s({},x,{ref:m.current,resize:O})))}c.propTypes={className:o.default.string,debounceTime:o.default.number,enableDebounceLeadingCall:o.default.bool,ignoreDimensions:o.default.oneOfType([o.default.any,o.default.arrayOf(o.default.any)]),children:o.default.func.isRequired}},i9k6:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var o=t("zjfJ"),r=t("yFcC"),i=t.n(r),a=t("ERkP"),l=t.n(a),u=t("jvFD"),s=t.n(u),c=t("i6Tx"),d=t.n(c),f=l.a.createElement;function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function v(e){var n,t,r=e.description,a=e.detailsHeight,u=void 0===a?76:a,c=e.detailsStyles,v=e.exampleProps,y=e.exampleRenderer,m=e.exampleUrl,h=e.tileStyles,g=e.title;return f(l.a.Fragment,null,(n=m,t=f("div",{style:h,className:"jsx-713312509 gallery-tile"},f("div",{className:"jsx-713312509 image"},f(d.a,null,(function(e){var n=e.width,t=e.height;return l.a.createElement(y,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({width:n,height:t+(g||r?u:0)},v))}))),(g||r)&&f("div",{style:c,className:"jsx-713312509 details"},g&&f("div",{className:"jsx-713312509 title"},g),r&&f("div",{className:"jsx-713312509 description"},f("pre",{className:"jsx-713312509"},r)))),n?f(s.a,{href:n},t):t),f(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{v.displayName="GalleryTile",v.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:v.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(y){}},kHoZ:function(e,n){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},nvU9:function(e,n,t){var o=t("tQYX"),r=t("a88S"),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(o(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var t=l.test(e);return t||u.test(e)?s(e.slice(2),t?2:8):a.test(e)?NaN:+e}},rkTo:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}));var r=function(){function e(e){var n=e.x,t=void 0===n?0:n,r=e.y,i=void 0===r?0:r;o(this,"x",0),o(this,"y",0),this.x=t,this.y=i}var n=e.prototype;return n.value=function(){return{x:this.x,y:this.y}},n.toArray=function(){return[this.x,this.y]},e}()},tLQN:function(e,n){e.exports=function(e){return null!=e&&"object"==typeof e}},tQYX:function(e,n){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},wPPg:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var o=t("ERkP"),r=t.n(o),i=t("Cf/J");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function l(e){var n=e.from,t=void 0===n?"#FCE38A":n,o=e.to,l=void 0===o?"#F38181":o,u=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["from","to"]);return r.a.createElement(i.a,a({from:t,to:l},u))}},yPcb:function(e,n,t){"use strict";var o=t("ERkP"),r=t.n(o),i=t("JmwF"),a=t("wPPg"),l=t("oqwl"),u=t("IacN"),s=t("krkd"),c=t("Tkov"),d=t("jpI8"),f=t("201w"),p=r.a.createElement,v=Object(f.a)(.88),y=new Array(150).fill(null).map((function(){return{x:v(),y:v(),id:Math.random().toString(36).slice(2)}})),m={top:0,left:0,right:0,bottom:76},h=function(e){var n=e.width,t=e.height,r=e.margin,f=void 0===r?m:r,v=n-f.left-f.right,h=t-f.top-f.bottom,g=Object(o.useMemo)((function(){return Object(s.a)({x:function(e){return e.x*v},y:function(e){return e.y*h},width:v,height:h})(y)}),[v,h]),x=g.polygons(),b=Object(o.useRef)(null),O=Object(o.useState)(null),w=O[0],j=O[1],E=Object(o.useState)(new Set),S=E[0],P=E[1];return n<10?null:p("svg",{width:n,height:t,ref:b},p(a.a,{id:"voronoi_orange_red"}),p(l.a,{id:"voronoi_pink_red"}),p(u.a,{id:"voronoi_clip",width:v,height:h,rx:14}),p(i.a,{top:f.top,left:f.left,clipPath:"url(#voronoi_clip)",onMouseMove:function(e){if(b.current){var n=Object(d.a)(b.current,e);if(n){var t=g.find(n.x,n.y,75);if(t&&t.data.id!==w){var o=new Set,r=g.cells[t.index];if(!r)return;r.halfedges.forEach((function(e){var n=g.edges[e],r=n.left,i=n.right;r&&r!==t?o.add(r.data.id):i&&i!==t&&o.add(i.data.id)})),P(o),j(t.data.id)}}}},onMouseLeave:function(){j(null),P(new Set)}},x.map((function(e){return p(c.a,{key:"polygon-".concat(e.data.id),polygon:e,fill:w&&(e.data.id===w||S.has(e.data.id))?"url(#voronoi_orange_red)":"url(#voronoi_pink_red)",stroke:"#fff",strokeWidth:1,fillOpacity:w&&S.has(e.data.id)?.5:1})})),y.map((function(e){var n=e.x,t=e.y,o=e.id;return p("circle",{key:"circle-".concat(o),r:2,cx:n*v,cy:t*h,fill:o===w?"fuchsia":"#fff",fillOpacity:.8})}))))};n.a=h;try{h.displayName="Example",h.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-voronoi/Example.tsx#Example"]={docgenInfo:h.__docgenInfo,name:"Example",path:"src/sandboxes/visx-voronoi/Example.tsx#Example"})}catch(g){}},zjfJ:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return o}))}},[["N6vE",0,2,1,3,9,8,10,22]]]);